import { useCallback, useEffect, useRef } from "react";
import { CustomObserverType } from "custom-hook/custom-hook-type";

export function useObserver() {
  const dom = useRef<CustomObserverType>(null);

  const handleScroll = useCallback(([entry]: any[]) => {
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
