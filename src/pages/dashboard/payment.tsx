import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { Tooltip } from 'antd'
import { IOrderRenderData } from '@/types/interface'
import { DashBoardLayout } from '@/modules/dashboard/DashBoardLayout'



export const getServerSideProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/getNewebPayOrder`
    )
    const { Data } = await res.data
    return {
      props: { Data }
    }
  } catch (error) {
    console.log(
      '🚀 ~ file: payment.tsx:10 ~ getServerSideProps ~ error:',
      error
    )
    return {
      props: { Data: [] }
    }
  }
}

export default function Payment({
  Data
}: {
  Data: { orderRecordsList: IOrderRenderData[] }
}) {
  const { orderRecordsList } = Data
  const [renderData, setRenderData] = useState(orderRecordsList)

  // ==================== 搜尋 API ====================
  const [searchWord, setSearchWord] = useState('')
  const keyWordGet = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getNewebPayOrder?UserName=${searchWord}`
      )
      setRenderData(res.data.Data.orderRecordsList)
    } catch (error) {
      console.log('🚀 ~ file: payment.tsx:46 ~ keyWordGet ~ error:', error)
    }
  }
  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      keyWordGet()
    }
  }

  return (
    <DashBoardLayout>
      <Tooltip title='以 Enter 鍵搜尋'>
        <input
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          onKeyDown={handleSearch}
          type='text'
          className='border border-gray-300 mb-4 rounded-full bg-gray-200 py-1 px-3 placeholder:text-gray-500 outline-none'
          placeholder='請輸入用戶姓名'
        />
      </Tooltip>

      <h3 className='text-xl font-bold mb-4'>金流記錄</h3>

      <div>
        <ul className='flex pb-2 font-bold h-[57px] bg-white border-b border-[#A0AEC0] text-[#A0AEC0] sticky top-[-50px] items-baseline'>
          <li className='w-[210px] h-full flex items-end'>訂單編號</li>
          <li className='w-[140px] h-full flex items-end'>諮商師姓名</li>
          <li className='w-[140px] h-full flex items-end'>個案姓名</li>
          <li className='w-[140px] h-full flex items-end'>諮商議題</li>
          <li className='w-[140px] h-full flex items-end'>訂單金額</li>
          <li className='w-[210px] h-full flex items-end'>購買日期</li>
        </ul>

        <ul>
          {renderData.map(
            ({
              OrderNum,
              CounselorName,
              UserName,
              Field,
              Price,
              OrderDate
            }: IOrderRenderData) => {
              const convertPrice = `NT$ ${Price.toLocaleString()}`
              const convertOrderDate = dayjs(OrderDate).format('YYYY／MM／DD')
              return (
                <li
                  key={OrderNum}
                  className='flex py-7 border-b border-[#A0AEC0]'
                >
                  <div className='w-[210px]'>{OrderNum}</div>
                  <div className='w-[140px]'>{CounselorName}</div>
                  <div className='w-[140px]'>{UserName}</div>
                  <div className='w-[140px]'>{Field}</div>
                  <div className='w-[140px]'>{convertPrice}</div>
                  <div className='w-[210px]'>{convertOrderDate}</div>
                </li>
              )
            }
          )}
        </ul>
      </div>
    </DashBoardLayout>
  )
}
