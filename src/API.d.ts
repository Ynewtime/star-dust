declare namespace API {
  /** 接口格式规范，T 为请求成功返回的数据类型 */
  export interface IErrorInfoStructure<T = any> {
    /** 请求是否成功 */
    success: boolean;
    /** 返回数据 */
    data?: T;
    /** 错误码 */
    errorCode?: string;
    /** 错误信息 */
    errorMessage?: string;
  }

  /** 用于获取 Promise 所传入的泛型 */
  export type GetPromiseInnerType<S> = S extends Promise<infer T> ? T : never;

  /** 用于获取 IErrorInfoStructure 所传入的泛型 */
  export type GetResponseInnerType<S> = S extends IErrorInfoStructure<infer T> ? T : never;

  /** 传入一个 services 函数，返回符合 useRequest run 函数签名的类型 */
  export type GetRunType<T extends (...args: any) => any> = (
    ...args: Parameters<T>
  ) => Promise<GetResponseInnerType<GetPromiseInnerType<ReturnType<T>>> | undefined>;

  /** 对 named function 的签名 */
  export type WithChildren<T = {}> = T & { children?: React.ReactNode | Element };
}
