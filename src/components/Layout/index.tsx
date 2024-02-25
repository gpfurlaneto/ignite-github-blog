import { ReactNode } from "react";
import { Content, Header, HeaderContainer, HeaderContent, Logo } from "./styles";
import logo from '../../assets/logo.svg'

type LayoutProps = {
  header: ReactNode
  children: ReactNode
}

export function Layout({ header, children }: LayoutProps) {
  return (
    <>
      <Header>
        <Logo src={logo} alt='Logo Git Hub Blog' />
        <HeaderContainer>
          <HeaderContent>{header}</HeaderContent>
        </HeaderContainer>
      </Header>
      <Content>
        {children}
      </Content>
    </>)
}