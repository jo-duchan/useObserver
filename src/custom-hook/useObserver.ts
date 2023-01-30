import { useCallback, useEffect, useRef } from "react";

export function useObserver(
  threshold: number,
  iteration: boolean,
  className: string | undefined,
  onIntersect: ((val: boolean) => void) | undefined
) {
  const dom = useRef<HTMLDivElement>(null);

  const Iteration = useCallback(
    (observer: IntersectionObserver, current: HTMLDivElement | null) => {
      if (!current) return;
      if (!iteration) observer.unobserve(current);
    },
    [iteration]
  );

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        className && current?.classList.add(className);
        onIntersect && onIntersect(true);
        Iteration(observer, current);
      } else {
        onIntersect && onIntersect(false);
        className && current?.classList.remove(className);
      }
    },
    [Iteration, className, onIntersect]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: threshold,
      });
      observer.observe(current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [handleScroll, threshold]);

  return {
    ref: dom,
  };
}
