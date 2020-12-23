import { useRef, useEffect } from 'react';

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.nodeType === ELEMENT_NODE_TYPE;
}

function getScrollParent(el: Element, root: ScrollElement = window) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }

      const { overflowY: htmlOverflowY } = window.getComputedStyle(
        node.parentNode as Element
      );

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode as Element;
  }

  return root;
}

const useScrollParent = (el: React.MutableRefObject<Element>) => {
  const scrollParent = useRef<Element | Window>();

  useEffect(() => {
    if(el) {
      scrollParent.current = getScrollParent(el.current);
    }
  }, [el]);

  return scrollParent;
};

export default useScrollParent;
