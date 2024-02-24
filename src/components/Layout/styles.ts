import styled from "styled-components"

export const Container = styled.header`

  position: relative;
  height: 296px;
  width: 100%;
  background-repeat: round;
  background-image: url('./background-banner.png');

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 110px;
`

export const Logo = styled.img`
  margin-top: 64px;
  width: 148px;
  height: 98px;
`

export const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  

  width: 864px;
  background-color: ${props => props.theme["base-profile"]};;
  border-radius: 10px;
  padding: 32px 40px;

  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);

  
`