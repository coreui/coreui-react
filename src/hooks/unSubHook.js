import { useEffect } from 'react';

export default function useApiSubscription(fn, isReady) {
  useEffect(() => {
    if (!isReady) {
      return;
    }

    try {
      const unsub = fn();
      return () => {
        isReady &&
          unsub &&
          unsub
            .then((u) => u())
            .catch((e) => {
              console.error('error unsubscribing', e);
            });
      };
    } catch (e) {
      console.error('error executing subscription', e);
    }
  }, [fn, isReady]);
}