import React from 'react';
import { RecoilRoot } from 'recoil';
import { RequestConfig } from 'umi';
import { notification } from 'antd';

import { codeMessage, NOTIFICATION_DURATION } from '@/constants';
import Truncate from '@/components/Truncate';

/**
 *  打印构建日志
 * BUILD_TIME 变量来自 umi 自带的 define 配置环境变量功能
 */
// eslint-disable-next-line
console.log(
  // @ts-ignore
  `%c构建时间：${BUILD_TIME}`,
  'color: #fff; background: #f40; font-size: 24px;border-radius:0 15px 15px 0;padding:10px;',
);

/**
 * 根节点
 */
export function rootContainer(container: React.ReactNode) {
  return <RecoilRoot>{container}</RecoilRoot>;
}

/**
 * 异常处理程序
 */
const errorHandler = (error: {
  response: Response;
  name: string;
  data: API.IErrorInfoStructure;
}): Response => {
  const { response, data } = error;

  if (response?.status) {
    const errorText =
      codeMessage[response.status as keyof typeof codeMessage] || response.statusText;
    const { status, url } = response;
    const { origin, pathname } = new URL(url);

    notification.error({
      message: `请求错误 ${status}: ${origin} ${pathname}`,
      description: <Truncate>{errorText}</Truncate>,
      duration: NOTIFICATION_DURATION,
    });
  } else if (data?.errorMessage) {
    notification.error({
      message: 'API 错误',
      description: <Truncate>{data.errorMessage}</Truncate>,
      duration: NOTIFICATION_DURATION,
    });
  } else if (!response) {
    notification.error({
      message: '网络异常',
      description: '您的网络发生异常，无法连接服务器',
      duration: NOTIFICATION_DURATION,
    });
  }

  return response || data;
};

/**
 * 配置request请求时的默认参数
 */
export const request: RequestConfig = {
  /** 默认请求是否带上cookie */
  credentials: 'include',
  /** 默认错误处理 */
  errorHandler,
};
