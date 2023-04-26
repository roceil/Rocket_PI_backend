import { Image } from 'antd'
import { DashBoardLayout } from '@/modules/dashboard/DashBoardLayout'
import { Switch } from 'antd'

const fakeAry = Array(15).fill(0)

export default function index() {
  // ========== switch 的值 ==========
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }
  return (
    <DashBoardLayout>
      <h3 className='text-xl font-bold mb-4'>訂單記錄</h3>

      <div>
        <ul className='flex pb-2 font-bold h-[57px] bg-white border-b border-[#A0AEC0] text-[#A0AEC0] sticky top-[-50px] items-baseline z-50'>
          <li className='w-1/5 h-full flex items-end'>諮商師姓名</li>
          <li className='w-1/5 h-full flex items-end'>諮商師證書</li>
          <li className='w-1/5 h-full flex items-end'>是否開通</li>
          <li className='w-1/5 h-full flex items-end'>請求補件</li>
          <li className='w-1/5 h-full flex items-end'></li>
        </ul>

        <ul>
          {fakeAry.map((_, index) => {
            return (
              <li
                key={index}
                className='flex py-7 border-b border-[#A0AEC0] items-center'
              >
                <div className='w-1/5'>劉昱涵</div>
                <div className='w-1/5'>
                  <Image
                    alt='諮商師姓名'
                    width={60}
                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                    className='p-1 border border-[#A0AEC0] rounded before:content-[123]'
                    placeholder='欲懶'
                  />
                </div>
                <div className='w-1/5'>
                  <Switch
                    defaultChecked={false}
                    onChange={onChange}
                    className='border bg-gray-500'
                  />
                </div>
                <div className='w-1/5'>
                  <button
                    type='button'
                    className='bg-secondary text-white inline-block py-1 px-3 rounded-lg font-bold hover:opacity-70'
                  >
                    要求補件
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </DashBoardLayout>
  )
}
