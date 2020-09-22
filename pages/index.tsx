/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function IndexPage() {
  const [form] = Form.useForm();

  return (
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <Form form={form} className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4">
          <h2 className="block text-gray-900 text-xl font-bold mb-2">Tell us about You</h2>
          <p className="block text-gray-500 text-sm font-bold mb-8">
            Please tell a bit about you so we can personalize your onboarding experience.
          </p>
          <Form.Item
            label={
              <span className="text-gray-700 text-sm font-medium mb-2">You are looking for:</span>
            }
            name="architect"
            htmlFor="architect"
            className="mb-4 block"
            colon={false}
          >
            <div className="flex bg-gray-200">
              <div className="flex-auto cursor-pointer text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 border-2 rounded text-custom-primary border-custom-primary">
                Designs
              </div>
              <div className="flex-auto cursor-pointer text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 border-2 rounded">
                Projects
              </div>
            </div>
          </Form.Item>
          <div className="flex">
            <Form.Item
              label={<span className="text-gray-700 text-sm font-medium mb-2">Full name</span>}
              name="title"
              htmlFor="title"
              className="mb-4 flex-1 block pr-2 md:pr-8"
              colon={false}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item
              label={<span className="text-gray-700 text-sm font-medium mb-2">Gender</span>}
              name="lecturer"
              htmlFor="lecturer"
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
            name="Website"
            htmlFor="Website"
            className="mb-4 block"
            colon={false}
          >
            <Input placeholder="Website" />
          </Form.Item>
          <Form.Item colon={false} className="mb-0">
            <div className="block flex items-center justify-center max-w-full">
              <Button type="primary" className="h-12 w-full">
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
