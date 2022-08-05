import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          background: #393e41;
        }

        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #f6f7eb;
        }
      `}
      </style>
    </>
  )
}

//Colors:
//#393e41 = dark
//#f6f7eb = light
//#3f88c5 = blue
//#44bba4 = green
//#e94f37 = orange

export default MyApp
