import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import useCloseLoading from '@/common/hooks/useCloseLoading'
import useOpenLoading from '@/common/hooks/useOpenLoading'
import { Image, Modal, Switch, Tooltip } from 'antd'
import { DashBoardLayout } from '@/modules/dashboard/DashBoardLayout'
import { loadingStatus } from '@/common/redux/feature/loading'
import CustomAlert from '@/common/helpers/customAlert'
import { ILicenseList } from '@/types/interface'



export const getServerSideProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/CounselorLicense`
    )
    const { Data } = await res.data
    return {
      props: {
        Data
      }
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }
}

export default function Index({
  Data
}: {
  Data: { LicenseList: ILicenseList[] }
}) {
  const { LicenseList = [] } = Data
  const [modal, alertModal] = Modal.useModal()
  const openLoading = useOpenLoading()
  const dispatch = useDispatch()
  const [renderData, setRenderData] = useState<ILicenseList[]>(LicenseList)

  // ==================== 關閉 Loading ====================
  useCloseLoading()

  // ==================== 搜尋 API ====================
  const [searchWord, setSearchWord] = useState('')
  const keyWordGet = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/CounselorLicense?CounselorName=${searchWord}`
      )
      setRenderData(res.data.Data.LicenseList)
    } catch (error) {
      console.log('🚀 ~ file: payment.tsx:46 ~ keyWordGet ~ error:', error)
    }
  }
  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      keyWordGet()
    }
  }

  // ==================== 開關開通狀態 API ====================
  const handleSwitch = async (CounselorId: number, validation: boolean) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/udateValidation`,
        {
          CounselorId,
          Validation: !validation
        }
      )
      keyWordGet()
      CustomAlert({
        modal,
        Message: '成功變更開通狀態',
        type: 'success',
        contentKeyWord: '關閉'
      })
    } catch (error: any) {
      console.log('🚀 ~ file: index.tsx:69 ~ handleSwitch ~ error:', error)
      const { Message }: { Message: string } = error.response.data
      CustomAlert({
        modal,
        Message,
        type: 'error'
      })
    }
  }
  const switchChange = (Id: number, Validation: boolean) => {
    handleSwitch(Id, Validation)
  }

  // ==================== 補件 API ====================
  const handleSendEmail = async (Id: number) => {
    openLoading()
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/backend/SendEmailCounselor`,
        {
          Id
        }
      )
      const { Message }: { Message: string } = res.data
      CustomAlert({
        modal,
        Message,
        type: 'success',
        contentKeyWord: '關閉'
      })
      dispatch(loadingStatus('none'))
    } catch (error: any) {
      console.log('🚀 ~ file: index.tsx:69 ~ handleSwitch ~ error:', error)
      const { Message }: { Message: string } = error.response.data
      CustomAlert({
        modal,
        Message,
        type: 'error'
      })
      dispatch(loadingStatus('none'))
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
          placeholder='請輸入諮商師姓名'
        />
      </Tooltip>
      <h3 className='text-xl font-bold mb-4'>諮商師開通狀態</h3>

      <div>
        <ul className='flex pb-2 font-bold h-[57px] bg-white border-b border-[#A0AEC0] text-[#A0AEC0] sticky top-[-50px] items-baseline z-50'>
          <li className='w-1/5 h-full flex items-end'>諮商師姓名</li>
          <li className='w-1/5 h-full flex items-end'>證書字號</li>
          <li className='w-1/5 h-full flex items-end'>諮商師證書</li>
          <li className='w-1/5 h-full flex items-end'>是否開通</li>
          <li className='w-1/5 h-full flex items-end'>請求補件</li>
        </ul>

        <ul>
          {renderData.map(
            ({ CertNumber, Id, LicenseImg, Name, Validation }) => {
              return (
                <li
                  key={Id}
                  className='flex py-7 border-b border-[#A0AEC0] items-center'
                >
                  <div className='w-1/5'>{Name}</div>
                  <div className='w-1/5'>{CertNumber}</div>
                  <div className='w-1/5'>
                    <Image
                      alt={Name}
                      width={60}
                      src={LicenseImg}
                      className='p-1 border border-[#A0AEC0] rounded before:content-[123]'
                    />
                  </div>
                  <div className='w-1/5'>
                    <Switch
                      defaultChecked={Validation}
                      onChange={() => switchChange(Id, Validation)}
                      className='border bg-gray-500'
                    />
                  </div>
                  <div className='w-1/5'>
                    <button
                      disabled={Validation}
                      onClick={() => handleSendEmail(Id)}
                      type='button'
                      className='bg-secondary text-white inline-block py-1 px-3 rounded-lg font-bold hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      要求補件
                    </button>
                  </div>
                </li>
              )
            }
          )}
        </ul>
        <div id='customAlert' className='alert'>
          {alertModal}
        </div>
      </div>
    </DashBoardLayout>
  )
}
