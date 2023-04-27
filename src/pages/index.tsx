import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Button, Form, Input, Modal, Space } from 'antd'
import { useRouter } from 'next/router'
import CustomAlert from '@/common/helpers/customAlert'
import logo from '/public/logo.svg'

export default function Home() {
  const [form] = Form.useForm()
  const router = useRouter()
  const [modal, alertModal] = Modal.useModal()
  const [passwordVisible, setPasswordVisible] = useState(false)

  // ==================== 登入 API ====================
  const logIn = async (Account: string, Password: string) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/backend/login`,
        {
          Account,
          Password
        }
      )
      const { Success, Message } = res.data
      if (Success) {
        CustomAlert({
          modal,
          Message,
          type: 'success',
          router,
          link: '/dashboard'
        })
      }
    } catch (error: any) {
      console.log('🚀 ~ file: index.tsx:15 ~ logIn ~ error:', error)
      const { Message }: { Message: string } = error.response.data
      CustomAlert({
        modal,
        Message,
        type: 'error'
      })
    }
  }

  // ==================== 送出表單 ====================
  const onFinish = ({
    Account,
    Password
  }: {
    Account: string
    Password: string
  }) => {
    console.log(Account, Password)
    logIn(Account, Password)
  }
  return (
    <main className='container'>
      <div className='flex justify-center items-center flex-col min-h-screen w-full '>
        <div className='rounded-lg shadow-md bg-white w-full max-w-[500px] py-12 flex flex-col justify-center items-center'>
          <div className='flex items-center space-x-3 w-full max-w-[416px] mb-6'>
            <Image src={logo} alt='logo' width={40} height={40} priority />
            <h2 className='font-bold text-secondary text-[32px] '>
              管理員登入
            </h2>
          </div>
          <Form
            layout='vertical'
            form={form}
            name='logIn'
            onFinish={onFinish}
            className='space-y-8 px-4 w-full max-w-[416px]'
            labelAlign='left'
          >
            <Form.Item
              name='Account'
              label='帳號'
              rules={[
                {
                  required: true,
                  message: '請輸入帳號'
                }
              ]}
            >
              <Input
                placeholder='Your email address'
                className='formInput rounded-xl  border-gray-500 !shadow-none placeholder:text-gray-500 py-4'
              />
            </Form.Item>

            <Form.Item
              name='Password'
              label='密碼'
              rules={[
                {
                  required: true,
                  message: '請輸入密碼'
                }
              ]}
            >
              <Space className='block'>
                <Input.Password
                  placeholder='Your password'
                  className='formInput py-4 border-gray-500 rounded-xl hover:border-secondary !shadow-none'
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible
                  }}
                />
              </Space>
            </Form.Item>

            <Form.Item className='!mt-12'>
              <Button
                type='primary'
                shape='round'
                htmlType='submit'
                className=' h-[56px] w-full bg-secondary !rounded-xl text-base text-white shadow-none font-bold border-none'
              >
                登入
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div id='customAlert' className='alert'>
        {alertModal}
      </div>
    </main>
  )
}
