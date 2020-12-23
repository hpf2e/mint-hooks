import { useEventListener } from './useEventListener';

export type UseClickAwayOptions = {
  eventName?: string;
};

export function useClickAway(
  target: React.MutableRefObject<Element>,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {

  const { eventName = 'click' } = options;

  const onClick = (event: Event) => {
    if (target && !target.current.contains(event.target as Node)) {
      listener(event);
    }
  };

  useEventListener(eventName, onClick, { target: document });
}

export default useClickAway;
