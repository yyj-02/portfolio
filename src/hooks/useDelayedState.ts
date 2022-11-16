import { useEffect, useState } from "react";

const useDelayedState = (listeningState: any, duration: number) => {
  const [delayedState, setDelayedState] = useState<any>(listeningState);
  useEffect(() => {
    setTimeout(() => {
      setDelayedState(listeningState);
    }, duration);
  }, [listeningState]);

  return delayedState;
};

export default useDelayedState;
