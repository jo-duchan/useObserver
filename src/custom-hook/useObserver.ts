import { useCallback, useEffect, useRef } from "react";

export function useObserver(
  threshold: number | number[],
  iteration: boolean,
  className: string | undefined,
  onIntersect: ((val: boolean) => void) | undefined,
  getTarget: ((dom: HTMLDivElement) => void) | undefined
) {
  const dom = useRef<HTMLDivElement>(null);

  const setElement = useCallback(
    (dom: HTMLDivElement) => {
      getTarget && getTarget(dom);
    },
    [getTarget]
  );

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
    if (!current) return;

    const delay = 300;
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    observer = new IntersectionObserver(handleScroll, {
      threshold: threshold,
    });

    observer.observe(current);
    setElement(current);

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setElement(current);
      }, delay);
    };

    window.addEventListener("resize", onResize);

    return () => {
      observer && observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // handleScroll이 Maximum update depth exceeded를 일으킨다.
  }, [threshold]);

  return {
    ref: dom,
  };
}
