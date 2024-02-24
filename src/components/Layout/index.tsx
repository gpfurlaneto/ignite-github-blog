import { ReactNode } from "react";
import { Container, HeaderContent, Logo } from "./styles";
import logo from '../../assets/logo.svg'

type LayoutProps = {
  header: ReactNode
  children: ReactNode
}

export function Layout({ header, children }: LayoutProps) {
  return (
    <main>
      <Container>
        <Logo src={logo} alt='Logo Git Hub Blog' />
        <HeaderContent>{header}</HeaderContent>
      </Container>
      {children}
    </main>
  )
}