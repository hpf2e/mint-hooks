
# useClickAway

监听点击元素外部的事件。

## 代码演示

### 基础用法

```tsx
import React, {useState, useRef} from 'react';
import { useClickAway } from 'mint-hooks';

export default () => {
  const root = useRef();

  useClickAway(
    root,
    () => {
      console.log('click outside 1!');
    },
  );

  return (
    <button ref={root} type="button">
      You click click times
    </button>
  );
};
```

### 自定义事件

```tsx
import React, {useState, useRef} from 'react';
import { useClickAway } from 'mint-hooks';

export default () => {
  const root = useRef();

  useClickAway(
    root,
    () => {
      console.log('touch outside!');
    },
    { eventName: 'touchstart' }
  );

  return (
    <button ref={root} type="button">
      You click touch times 
    </button>
  );
};
```

### API

```html
function useClickAway(
  target: Element,
  listener: EventListener,
  options?: Options
): void;

type Options = {
  eventName?: string;
};
```

### Params

| 参数      | 说明       | 类型       | 默认值 |
|-----------|------------|------------|--------|
| target | 绑定事件的元素   | `React.MutableRefObject<Element>`   | -      |
| listener   | 点击外部时触发的回调函数	   | `EventListener` | -      |
| options   | 设置(可选) | `Options`  | -      |

### Options
