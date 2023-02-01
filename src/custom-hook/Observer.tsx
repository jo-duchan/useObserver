import React, { ReactNode } from "react";

// Custom Hook
import { useObserver } from "./useObserver";

// Type

interface Props {
  children: ReactNode;
  /**
   * @default
   * 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자입니다.
   * 기본 값은 1 이고 이는 100%를 의미합니다.
   * 만일 50%만큼 요소가 보였을 때 실행하고 싶으면 값을 0.5 로 설정하면 됩니다.
   * 값은 0 부터 1 사이에 값을 넣으세요.
   */
  threshold: number | number[];
  iteration: boolean;
  className: string;
  onIntersect: (val: boolean) => void;
  getTarget: (dom: HTMLDivElement) => void;
}

function Observer({
  children,
  threshold,
  iteration,
  className,
  onIntersect,
  getTarget,
}: Props) {
  const scrollObserver = useObserver(
    threshold,
    iteration,
    className,
    onIntersect,
    getTarget
  );
  return (
    <div style={{ position: "relative" }} {...scrollObserver}>
      {children}
    </div>
  );
}

export default React.memo(Observer);

Observer.defaultProps = {
  threshold: 1,
  iteration: true,
  className: undefined,
  onIntersect: undefined,
  getTarget: undefined,
};
