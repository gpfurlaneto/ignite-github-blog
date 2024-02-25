import styled from "styled-components"

export const Header = styled.header`

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  height: 296px;
  width: 100%;

  background-repeat: no-repeat;
  background-size: 100% 296px;
  background-image: url('../background-banner.png');
  
  margin-bottom: 110px;

  @media (max-width: 900px) {
    height: unset;
    margin-bottom: 0px;
  }
  
`

export const Logo = styled.img`
  margin-top: 64px;
  width: 148px;
  height: 98px;
`

export const HeaderContainer = styled.div`
  padding: 0px 20px;
  width: 100%;
`

export const HeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  

  width: 864px;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 32px 40px;

  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);

  @media (max-width: 864px) {
    width: 100%;
    position: static;
    transform: unset;
    margin-top: 50px;
  }
`

export const Content = styled.main`
  margin: auto;
  max-width: 864px;

  @media (max-width: 900px) {
    margin: 0px 20px;
  }
`
