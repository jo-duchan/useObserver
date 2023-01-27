import { useCallback, useEffect, useRef } from "react";

export function useObserver(threshold: number, iteration: boolean) {
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
        current?.classList.add("active");
        Iteration(observer, current);
      } else {
        current?.classList.remove("active");
      }
    },
    [Iteration]
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
