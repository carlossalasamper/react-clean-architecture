import { useEffect, useRef } from "react";

export function useEffectOnce(callback: () => void) {
  const didRun = useRef(false);
  useEffect(() => {
    if (!didRun.current) {
      callback();
      didRun.current = true;
    }
  });
}
