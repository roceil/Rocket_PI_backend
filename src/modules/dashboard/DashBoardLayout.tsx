import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  BarsOutlined,
  CreditCardOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons'
import logo from '/public/logo.svg'

export function DashBoardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { pathname } = router
  console.log(
    '🚀 ~ file: DashBoardLayout.tsx:15 ~ DashBoardLayout ~ pathname:',
    pathname
  )

  // ==================== 確認目前的 pathName ====================
  const isDashBoard =
    pathname === '/dashboard' ? '!bg-white !text-secondary' : ''
  const isDashBoardButton =
    pathname === '/dashboard' ? '!bg-secondary !text-white' : ''

  const isDashBoardOrder =
    pathname === '/dashboard/order' ? '!bg-white !text-secondary' : ''
  const isDashBoardOrderButton =
    pathname === '/dashboard/order' ? '!bg-secondary !text-white' : ''

  const isDashBoardPayment =
    pathname === '/dashboard/payment' ? '!bg-white !text-secondary' : ''
  const isDashBoardPaymentButton =
    pathname === '/dashboard/payment' ? '!bg-secondary !text-white' : ''

  return (
    <div className='container mt-12'>
      <div className='flex justify-between'>
        <div className='w-[15.1234%] '>
          <div className='flex space-x-4 border-b border-gray-400'>
            <Image src={logo} alt='logo' width={50} height={50} priority/>
            <h2 className='text-2xl text-gray-900 font-bold py-5 '>拍拍</h2>
          </div>

          <ul className='pt-7 space-y-6 font-bold'>

            <li className='group'>
              <Link href='/dashboard'
                className={`${isDashBoard} group-hover:bg-secondary group-hover:text-white flex w-full items-center rounded-2xl py-3 px-4  space-x-3 text-gray-600`}
              >
                <UserOutlined
                  className={`${isDashBoardButton} sideBarButton text-secondary`}
                />
                <p>諮商師開通狀態</p>
              </Link>
            </li>

            <li className='group'>
              <Link href='/dashboard/order'
                className={`${isDashBoardOrder} flex w-full group-hover:bg-secondary group-hover:text-white items-center rounded-2xl py-3 px-4 space-x-3 text-gray-600`}
              >
                <BarsOutlined
                  className={`${isDashBoardOrderButton} sideBarButton text-secondary`}
                />
                <p>訂單紀錄</p>
              </Link>
            </li>

            <li className='group'>
              <Link href='/dashboard/payment'
                className={`${isDashBoardPayment} flex group-hover:bg-secondary group-hover:text-white w-full items-center rounded-2xl py-3 px-4 space-x-3 text-gray-600`}
              >
                <CreditCardOutlined
                  className={`${isDashBoardPaymentButton} sideBarButton text-secondary`}
                />
                <p>金流紀錄</p>
              </Link>
            </li>

            <li>
              <button className='group flex items-center w-full rounded-2xl hover:!bg-white py-3 px-4 space-x-3'>
                <LogoutOutlined className='sideBarButton text-secondary group-hover:text-white group-hover:bg-secondary' />
                <p className='text-gray-600 group-hover:text-secondary'>登出</p>
              </button>
            </li>
          </ul>
        </div>

        <div className='w-[83.0246%] h-[1151px] bg-secondary mt-[62px]'>
          {children}
        </div>
      </div>
    </div>
  )
}
