import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/views/layout.scss";

type Props = {
  children: JSX.Element,
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