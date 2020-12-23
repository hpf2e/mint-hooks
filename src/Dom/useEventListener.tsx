import { useEffect, useRef } from 'react';

const inBrowser = typeof window !== 'undefined';

let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export type UseEventListenerOptions = {
  target?: any;
  capture?: boolean;
  passive?: boolean;
};

export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {},
) {
  if (!inBrowser) {
    return;
  }

  const { target, passive = false, capture = false } = options;

  const savedHandler = useRef<EventListener | null>(null);

  useEffect(() => {
    savedHandler.current = listener;
  }, [listener]);

  let attached: boolean;

  useEffect(() => {
    const element = target?.current ?? window;

    const eventListener = (event: MouseEvent) => {
      savedHandler.current && savedHandler.current(event);
    };

    // Add event listener
    if (element && !attached) {
      element.addEventListener(
        type,
        eventListener,
        supportsPassive ? { capture, passive } : capture
      );
      attached = true;
    }

    return () => {
      if (element && attached) {
        element.removeEventListener(type, eventListener, capture);
        attached = false;
      }
    };
  }, [target]);
}

export default useEventListener;
