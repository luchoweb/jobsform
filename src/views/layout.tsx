import { ReactElement } from "react";

import Header from "../components/common/header";
import Footer from "../components/common/footer";

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