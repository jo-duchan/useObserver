import { useCallback, useEffect, useRef } from "react";

// Type
export interface IntersectType {
  isIntersecting: boolean;
}

export function useObserver(threshold: number) {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(<T extends IntersectType>([entry]: T[]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current?.classList.add("active");
    } else {
      current?.classList.remove("active");
    }
  }, []);

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
