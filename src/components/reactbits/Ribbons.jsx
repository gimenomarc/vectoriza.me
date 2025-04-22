import { useEffect, useRef } from 'react';
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl';
import './Ribbons.css';

const Ribbons = ({
  colors = ['#FC8EAC'],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = true,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
    const gl = renderer.gl;
    gl.clearColor(...backgroundColor);

    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines = [];

    const vertex = `precision highp float;
    attribute vec3 position, next, prev;
    attribute vec2 uv;
    attribute float side;
    uniform vec2 uResolution;
    uniform float uDPR, uThickness, uTime, uEnableShaderEffect, uEffectAmplitude;
    varying vec2 vUV;
    vec4 getPosition() {
        vec4 current = vec4(position, 1.0);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x) / aspect;
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);
        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
        if(uEnableShaderEffect > 0.5) {
          current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
        }
        return current;
    }
    void main() {
        vUV = uv;
        gl_Position = getPosition();
    }`;

    const fragment = `precision highp float;
    uniform vec3 uColor;
    uniform float uOpacity, uEnableFade;
    varying vec2 vUV;
    void main() {
        float fadeFactor = 1.0;
        if(uEnableFade > 0.5) {
            fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
        }
        gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
    }`;

    function resize() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05;
      const friction = baseFriction + (Math.random() - 0.5) * 0.05;
      const thickness = baseThickness + (Math.random() - 0.5) * 3;
      const mouseOffset = new Vec3((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0);

      const line = { spring, friction, mouseVelocity: new Vec3(), mouseOffset };
      const points = Array.from({ length: pointCount }, () => new Vec3());
      line.points = points;

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 1.0 },
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 },
        },
      });

      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    function updateMouse(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;
      mouse.set((x / container.clientWidth) * 2 - 1, (y / container.clientHeight) * -2 + 1, 0);
    }

    container.addEventListener('mousemove', updateMouse);
    container.addEventListener('touchstart', updateMouse);
    container.addEventListener('touchmove', updateMouse);

    let frameId;
    function update(t = 0) {
      frameId = requestAnimationFrame(update);
      lines.forEach(line => {
        const tmp = mouse.clone().add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);
        for (let i = 1; i < line.points.length; i++) {
          const alpha = Math.min(1, (16 * speedMultiplier) / (maxAge / (pointCount - 1)));
          line.points[i].lerp(line.points[i - 1], alpha);
        }
        line.polyline.mesh.program.uniforms.uTime.value = t * 0.001;
        line.polyline.updateGeometry();
      });
      renderer.render({ scene });
    }

    update();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      gl.canvas.remove();
    };
  }, [colors]);

  return <div ref={containerRef} className="ribbons-container" />;
};

export default Ribbons;
