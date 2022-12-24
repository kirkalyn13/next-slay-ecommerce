import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
  children: JSX.Element|JSX.Element[]
}

const Layout = ({children}: LayoutProps) => {
  return (
    <main>
      <Navbar/>
        {children}
      <Footer/>
    </main>
  )
}

export default Layout