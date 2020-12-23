# useRect

获取元素四周位置

## 代码演示

### 基本用法

```tsx
import React, {useRef, useState} from 'react';
import { useRect } from 'mint-hooks';

export default () => {
  const ref = useRef(null)
  const [currentText, setText] = useState('')
  const rect = useRect(ref.current)

  return (
    <div className="App">
      <button
        onClick={() => {
          setText(currentText + ' More Text')
        }}
      >
        Add text
      </button>
      <div>
        <span ref={ref}>{currentText}</span>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  )
};
```

### API

```html
useRect(element)
```

### Params

| 参数      | 说明       | 类型       | 默认值 |
|-----------|------------|------------|--------|
| element | 获取的元素   | Element | Window | undefined | null   | -      |
