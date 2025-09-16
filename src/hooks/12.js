import { useState, useEffect } from 'react';

// 这是一个包含多种bug的React Hook
export const useBuggyHook = (initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Bug 1: 无限循环 - useEffect没有依赖数组
  useEffect(() => {
    setData(data + 1);
  });

  // Bug 2: 内存泄漏 - 组件卸载后仍然更新状态
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 可能在组件卸载后执行
    }, 5000);
    // 没有清理定时器
  }, []);

  // Bug 3: 竞态条件
  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/data/${id}`);
      const result = await response.json();
      // 没有检查组件是否还挂载就更新状态
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Bug 4: 状态更新闭包陷阱
  const incrementCounter = () => {
    setTimeout(() => {
      setData(data + 1); // 使用过时的状态值
    }, 1000);
  };

  // Bug 5: 直接修改状态对象
  const updateNestedData = (newValue) => {
    if (typeof data === 'object') {
      data.nestedProperty = newValue; // 直接修改状态
      setData(data); // 传入相同的引用
    }
  };

  // Bug 6: 条件性Hook调用
  if (data > 10) {
    const [extraState] = useState(0); // 违反Hook规则
  }

  return {
    data,
    loading,
    error,
    fetchData,
    incrementCounter,
    updateNestedData
  };
};

// Bug 7: 组件中的逻辑错误
export const BuggyComponent = () => {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // Bug: 数组越界访问
  const selectedItem = items[selectedId]; // 如果selectedId为null会出错

  // Bug: 不正确的条件判断
  const hasItems = items.length > 0 && items !== null; // 多余的null检查

  // Bug: key使用数组索引可能导致渲染问题
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => setSelectedId(index)}>
          {item.name}
        </div>
      ))}
      {selectedItem && <p>{selectedItem.description}</p>}
    </div>
  );
};
