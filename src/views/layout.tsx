import { ReactElement } from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import "../styles/views/layout.scss";

type Props = {
  children: ReactElement,
  className?: string
}

const Layout = ( { children, className = 'layout' }: Props ) => {
  return (
    <main role="main" className={ className }>
      <Header />
      { children }
      <Footer />
    </main>
  )
}

export default Layout;