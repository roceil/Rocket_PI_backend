import '@/styles/globals.css'
import '@/styles/antd/antd.css'

import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/common/redux/store'

import Loading from '@/common/components/Loading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorText: '#4A5364',
            colorBorder: '#D4D2E3',
            colorIcon: '#4A5364',
            colorPrimaryHover: '#4A5364',
            colorPrimary: '#4A5364',
            colorPrimaryActive: '#4A5364',
            colorError: '#D14D3C '
          },
          components: {
            Tabs: {
              colorText: '#D4D2E3',
              colorPrimary: '#4A5364'
            },
            Checkbox: {
              borderRadius: 0
            },
            Button: {
              colorPrimary: '#4A5364',
              colorPrimaryHover: '#4A5364',
              colorPrimaryActive: '#4A5364',
              colorTextDisabled: '#fff'
            }
          }
        }}
      >
        <Loading />
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}
