import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import dayjs from 'dayjs'
import rateStar from 'public/rateStar.svg'
import { DashBoardLayout } from '@/modules/dashboard/DashBoardLayout'
import { Tooltip } from 'antd'

const fakeAry = Array(15).fill(0)
const fakeRate = Array(3).fill(0)

interface IOrderRenderData {
  CounselorName: string
  Field: string
  Id: number
  ReserveStatus: string
  Star: number | null
  Time: string | null
  UserName: string
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/getAppTList`
    )
    const { Data } = await res.data
    return {
      props: {
        Data
      }
    }
  } catch (error) {
    console.log('🚀 ~ file: order.tsx:13 ~ getServerSideProps ~ error:', error)
    return {
      props: {
        Data: []
      }
    }
  }
}

export default function Order({
  Data
}: {
  Data: { appointmentsList: IOrderRenderData[] }
}) {
  const { appointmentsList } = Data
  console.log(
    '🚀 ~ file: order.tsx:33 ~ order ~ appointmentsList:',
    appointmentsList
  )
  const [renderData, setRenderData] = useState(appointmentsList)

  // ==================== 時間轉換函式 ====================
  const convertData = (time: string | null) => {
    const newDate = dayjs(time).format('YYYY / MM / DD')
    return newDate
  }
  const convertTime = (time: string | null) => {
    const newTime = dayjs(time).format('HH:mm')
    return newTime
  }

  // ==================== 搜尋 API ====================
  const [searchWord, setSearchWord] = useState('')
  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      console.log('搜尋')
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
      <h3 className='text-xl font-bold mb-4'>訂單記錄</h3>

      <div>
        <ul className='flex pb-2 font-bold h-[57px] bg-white border-b border-[#A0AEC0] text-[#A0AEC0] sticky top-[-50px] items-baseline'>
          <li className='w-1/6 h-full flex items-end'>諮商師姓名</li>
          <li className='w-1/6 h-full flex items-end'>個案姓名</li>
          <li className='w-1/6 h-full flex items-end'>諮商議題</li>
          <li className='w-1/6 h-full flex items-end'>諮商時間</li>
          <li className='w-1/6 h-full flex items-end'>課程狀態</li>
          <li className='w-1/6 h-full flex items-end'>個案評價</li>
        </ul>

        <ul>
          {renderData.map(
            ({
              CounselorName,
              Field,
              Id,
              ReserveStatus,
              Star,
              Time,
              UserName
            }) => {
              const newTime = convertTime(Time)
              const newDate = convertData(Time)
              if (!Star) {
                return (
                  <li
                    key={Id}
                    className='flex py-7 border-b border-[#A0AEC0] items-center'
                  >
                    <div className='w-1/6'>{CounselorName}</div>
                    <div className='w-1/6'>{UserName}</div>
                    <div className='w-1/6'>{Field}</div>
                    <div className='w-1/6'>
                      <p className={`hidden ${Time && !'block'}`}>{newDate}</p>
                      <p className={`hidden ${Time && !'block'}`}>{newTime}</p>
                      <p className={`block ${Time && '!hidden'}`}>待預約</p>
                    </div>
                    <div className='w-1/6'>
                      <div className='bg-slate-300 text-white inline-block py-1 px-3 rounded-lg font-bold'>
                        {ReserveStatus === '待預約' ? '尚未進行' : '已完成'}
                      </div>
                    </div>
                    <div className='w-1/6'>-</div>
                  </li>
                )
              }
              if (Star) {
                return (
                  <li
                    key={Id}
                    className='flex py-7 border-b border-[#A0AEC0] items-center'
                  >
                    <div className='w-1/6'>{CounselorName}</div>
                    <div className='w-1/6'>{UserName}</div>
                    <div className='w-1/6'>{Field}</div>
                    <div className='w-1/6'>
                      <p className={`hidden ${Time && !'block'}`}>{newDate}</p>
                      <p className={`hidden ${Time && !'block'}`}>{newTime}</p>
                      <p className={`block ${Time && '!hidden'}`}>待預約</p>
                    </div>
                    <div className='w-1/6'>
                      <div className='bg-success text-white inline-block py-1 px-3 rounded-lg font-bold'>
                        {ReserveStatus === '待預約' ? '尚未進行' : '已完成'}
                      </div>
                    </div>
                    <div className='w-1/6 flex'>
                      {fakeRate.map((_, index) => {
                        return (
                          <Image
                            key={index}
                            src={rateStar}
                            alt='rateStar'
                            width={24}
                            height={24}
                          />
                        )
                      })}
                    </div>
                  </li>
                )
              }
            }
          )}
        </ul>
      </div>
    </DashBoardLayout>
  )
}
