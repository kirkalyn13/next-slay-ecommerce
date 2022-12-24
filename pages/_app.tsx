import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

const LOGIN = `/login`
const SIGNUP = `/signup`

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  // Import Boostrap JS
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js")
  },[])
  // No Layout Rendered on Login Page
  if ([LOGIN, SIGNUP].includes(appProps.router.pathname)) return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
