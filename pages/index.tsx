/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface InterestsCardValue {
  interestsList?: Array<string>;
  selectInterest?: string;
}

interface InterestsCardProps {
  value?: InterestsCardValue;
  onChange?: (value: InterestsCardValue) => void;
}

const InterestsCard: React.FC<InterestsCardProps> = ({ value = {}, onChange }) => {
  const { interestsList, selectInterest } = value;
  return (
    <div className="flex bg-gray-200">
      {interestsList?.map((interest) => (
        <div
          key={interest}
          className={`flex-auto cursor-pointer text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 border-2 rounded ${
            interest === selectInterest ? 'text-custom-primary border-custom-primary' : ''
          }`}
          onClick={() =>
            onChange &&
            onChange({
              interestsList,
              selectInterest: interest,
            })
          }
        >
          {interest}
        </div>
      ))}
    </div>
  );
};

export default function IndexPage() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    alert(`Received values of form: \n${JSON.stringify(values, null, 4)}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <Form
          form={form}
          onFinish={onFinish}
          className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4"
        >
          <h2 className="block text-gray-900 text-xl font-bold mb-2">Tell us about You</h2>
          <p className="block text-gray-500 text-sm font-bold mb-8">
            Please tell a bit about you so we can personalize your onboarding experience.
          </p>
          <Form.Item
            label={
              <span className="text-gray-700 text-sm font-medium mb-2">You are looking for:</span>
            }
            name="interest"
            htmlFor="interest"
            className="mb-4 block"
            colon={false}
            initialValue={{
              interestsList: ['Designs', 'Projects'],
              selectInterest: 'Projects',
            }}
          >
            <InterestsCard />
          </Form.Item>
          <div className="flex">
            <Form.Item
              label={<span className="text-gray-700 text-sm font-medium mb-2">Full name</span>}
              name="name"
              htmlFor="name"
              className="mb-4 flex-1 block pr-2 md:pr-8"
              colon={false}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item
              label={<span className="text-gray-700 text-sm font-medium mb-2">Gender</span>}
              name="gender"
              htmlFor="gender"
              className="mb-4 block w-32"
              colon={false}
            >
              <Input prefix={<UserOutlined />} placeholder="Male" />
            </Form.Item>
          </div>
          <Form.Item
            label={<span className="text-gray-700 text-sm font-medium mb-2">Description</span>}
            name="description"
            htmlFor="description"
            className="mb-4 block"
            colon={false}
          >
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-700 text-sm font-medium mb-2">Website</span>}
            name="website"
            htmlFor="website"
            className="mb-4 block"
            colon={false}
          >
            <Input placeholder="Website" />
          </Form.Item>
          <Form.Item colon={false} className="mb-0">
            <div className="block flex items-center justify-center max-w-full">
              <Button type="primary" htmlType="submit" className="h-12 w-full">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Ynewtime. All rights reserved.
        </p>
      </div>
    </div>
  );
}
