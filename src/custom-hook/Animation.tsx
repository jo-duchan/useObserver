import React, { ReactNode } from "react";

// Custom Hook
import { useObserver } from "custom-hook/useObserver";

// Type
interface Props {
  children: ReactNode;
}

function Animation({ children }: Props) {
  const scrollObserver = useObserver();
  return <div {...scrollObserver}>{children}</div>;
}

export default React.memo(Animation);
