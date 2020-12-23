# useScrollParent

获取元素最近的可滚动父元素。

## 代码演示

### 基本用法

```tsx
import React, { useRef } from 'react';
import { useScrollParent, useEventListener } from 'mint-hooks';

export default () => {
  const root = useRef<HTMLDivElement | null>(null);
  const scrollParent = useScrollParent(root);

  useEventListener(
    'scroll',
    () => {
      console.log('scroll window');
    },
    { target: scrollParent }
  );

  return (
    <div
      ref={root}
    >
      here is scroll
    </div>
  )
}
```

### 父级元素滚动

```tsx
import React, { useRef } from 'react';
import { useScrollParent, useEventListener } from 'mint-hooks';

const List = (pro) => {
  const root = useRef<HTMLDivElement | null>(null);
  const scrollParent = useScrollParent(root);

  useEventListener(
    'scroll',
    () => {
      console.log('scroll section');
    },
    { target: scrollParent }
  );

  return (
    <section
      style={{
        overflowY: 'auto',
        height: '200px',
      }}
    >
      <div
        ref={root}
        style={{
          height: '400px',
        }}
      >
        here is scroll
      </div>
    </section> 
  )
}

export default List;
```

### API

```html
function useScrollParent(
  element: Ref<Element | undefined>
): Ref<Element | Window | undefined>;
```

### 参数

| 参数      | 说明       | 类型       | 默认值 |
|-----------|------------|------------|--------|
| element | 当前元素   | React.MutableRefObject<\Element\> | - |

### 返回值

| 参数      | 说明       | 类型       | 默认值 |
|-----------|------------|------------|--------|
| scrollParent | 最近的可滚动父元素  | Window \| Element | Window |
