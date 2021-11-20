/*
 * 返回页面url中，指定键的参数值
 * */
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

//array 转成 obj
//'as Const'一般解决数组中类型不一致的问题

export const useUrlQueryParams = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in K]: string }),
      [searchParams]
    ),
    setSearchParam,
  ] as const;
};
