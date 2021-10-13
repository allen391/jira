import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

//custom hook最大的特征就是里面会有hook用到
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次再上一个useffect运行完以后在运行
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);
  return debounceValue;
};
