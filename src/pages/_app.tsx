import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '600'],
  variable: '--font-poppins'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={poppins.className}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
