import { useCallback, useEffect, useRef } from "react";

// Type
export interface IntersectType {
  isIntersecting: boolean;
}

export function useObserver() {
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
      // threshold 노출 정도
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
}
