import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) => value === undefined || value === "";
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

//custom hook最大的特征就是里面会有hook用到
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: unknown, delay?: number): any => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次再上一个useEffect运行完以后在运行
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);
  return debounceValue;
};

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = document.title;

  useEffect(() => {
    console.log("渲染时的标题", oldTitle);
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        console.log("卸载后的标题", oldTitle);
        document.title = oldTitle;
      }
    };
  }, []);
};
