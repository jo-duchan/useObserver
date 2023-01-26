import { useCallback, useEffect, useRef } from "react";
import { CustomObserverType } from "custom-hook/custom-hook-type";

interface Isintersecting {
  isIntersecting: boolean;
}

export function useObserver() {
  const dom = useRef<any>(null);

  const handleScroll = useCallback(<T extends Isintersecting>([entry]: T[]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      console.log("Active");
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
