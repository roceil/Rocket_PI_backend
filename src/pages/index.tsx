import Image from 'next/image'
import { Button, Form, Input, Modal, Space } from 'antd'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [form] = Form.useForm()
  const [passwordVisible, setPasswordVisible] = useState(false);

  // ==================== 送出表單 ====================
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  return (
    <main className='container'>
      <div className="flex justify-center items-center flex-col min-h-screen w-full ">
      <h2 className='font-bold text-secondary text-[32px] w-full max-w-[416px] mb-6'>管理員登入</h2>
      <Form
        layout='vertical'
        form={form}
        name='logIn'
        onFinish={onFinish}
        className='space-y-8 px-4 w-full max-w-[416px]'
        labelAlign='left'
      >
          <Form.Item
      name="Account"
      label="帳號"
      rules={[
        {
          required: true,
          message: '請輸入帳號',
        },
      ]}
    >
      <Input placeholder="Your email address" className="formInput rounded-xl  border-gray-200 !shadow-none placeholder:text-gray-500 py-4" />
    </Form.Item>

    <Form.Item
      name="Password"
      label='密碼'
      rules={[
        {
          required: true,
          message: '請輸入密碼',
        },
      ]}
    >
      <Space className="block">
        <Input.Password
          placeholder="Your password"
          className="formInput py-4 border-gray-200 rounded-xl hover:border-secondary !shadow-none"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Space>
    </Form.Item>

    <Form.Item className="!mt-12">
      <Button
        type="primary"
        shape="round"
        htmlType="submit"
        className=" h-[56px] w-full bg-secondary !rounded-xl text-base text-white shadow-none font-bold border-none"
      >
        登入
      </Button>
    </Form.Item>

        {/* <FormSubmitBtn text="登入" />
      <div id="customAlert" className="alert">{alertModal}</div> */}
      </Form>
      </div>
    </main>
  )
}
