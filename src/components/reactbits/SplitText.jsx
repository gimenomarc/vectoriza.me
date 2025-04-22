import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map(word => [...word, ' ']);
  const letters = words.flat();

  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const [springs] = useSprings(letters.length, i => ({
    from: animationFrom,
    to: animationTo,
    delay: i * delay,
    config: { easing },
    pause: !inView,
    onRest: () => {
      animatedCount.current += 1;
      if (animatedCount.current === letters.length && onLetterAnimationComplete) {
        onLetterAnimationComplete();
      }
    },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {springs.map((props, i) => (
        <animated.span key={i} style={props}>
          {letters[i]}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
