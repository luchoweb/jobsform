import { ReactElement } from "react";
import "../styles/views/layout.scss";

type Props = {
  children: ReactElement,
  className?: string
}

const Layout = ( { children, className = 'layout' }: Props ) => {
  return (
    <main className={ className }>
      { children }
    </main>
  )
}

export default Layout;