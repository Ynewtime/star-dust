/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import { List } from 'antd';

const data = [
  {
    title: 'Resume',
    description: '轻简历设计',
    link: '/resume',
  },
  {
    title: 'Onboarding',
    description: '一个简单的用户信息表单',
    link: '/onboarding',
  },
];

export default function IndexPage() {
  return (
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
          <h2 className="block text-gray-900 text-xl font-bold">《星尘》</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Link href={item.link}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Ynewtime. All rights reserved.
        </p>
      </div>
    </div>
  );
}
