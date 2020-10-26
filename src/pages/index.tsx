import React from 'react';
import { Link } from 'umi';
import { List } from 'antd';

import Footer from '@/components/Footer';

const data = [
  // {
  //   title: 'Topology',
  //   description: '基于 @antv/g6 的拓扑编辑器',
  //   link: '/topology',
  // },
  {
    title: 'Onboarding',
    description: '一个简单的用户信息表单',
    link: '/onboarding',
  },
  {
    title: 'Resume',
    description: '轻简历设计',
    link: '/resume',
  },
];

export default function IndexPage() {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-4">
        <div className="px-8 py-6 mb-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-gray-900 text-xl font-bold mb-2">《星尘》</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Link to={item.link}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
