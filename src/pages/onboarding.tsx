import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, BgColorsOutlined, BarChartOutlined } from '@ant-design/icons';

import Footer from '@/components/Footer';

type InterestList = 'design' | 'project';

const icon: {
  [props in InterestList]: React.ReactElement;
} = {
  design: <BgColorsOutlined className="pr-2" />,
  project: <BarChartOutlined className="pr-2" />,
};

interface InterestsCardValue {
  interestsList?: InterestList[];
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
      {interestsList?.map(interest => (
        <div
          key={interest}
          className={`
            flex-auto cursor-pointer text-gray-700 text-center bg-gray-400 
            px-4 py-2 m-2 border-2 rounded flex justify-center items-center ${
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
          {icon[interest]} {interest.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

interface IFormValues {
  interest: InterestsCardValue;
  name: string;
  gender: string;
  description: string;
  website: string;
  time_span: [string, string];
}

export default function OnboardingPage() {
  const [form] = Form.useForm();
  const onFinish = (values: IFormValues) => {
    // eslint-disable-next-line no-alert
    alert(`Received values of form: \n${JSON.stringify(values, null, 4)}`);
  };

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-sm mx-4 md:mx-0 sm:max-w-md md:max-w-lg">
        <Form<IFormValues>
          form={form}
          onFinish={onFinish}
          initialValues={{
            interest: {
              interestsList: ['design', 'project'],
              selectInterest: 'project',
            },
          }}
          className="bg-white shadow-lg rounded-lg px-8 py-6 mb-2"
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
          >
            <InterestsCard />
          </Form.Item>
          <div className="flex flex-col md:flex-row">
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
            <div className="flex items-center justify-center max-w-full">
              <Button type="primary" htmlType="submit" className="h-12 w-full">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
        <Footer />
      </div>
    </div>
  );
}
