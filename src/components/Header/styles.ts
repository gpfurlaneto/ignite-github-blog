import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.header`
  position: relative;
  height: 296px;
  width: 100%;
  background-repeat: round;
  background-image: url('./background-banner.png');

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 64px;
    width: 148px;
    height: 98px;
  }
  
`

export const HeaderContent = styled.div`

  position: absolute;

  display: flex;
  flex-direction: row;
  gap: 32px;

  width: 864px;
  height: 212px;
  background: ${props => props.theme["base-profile"]};

  border-radius: 10px;
  padding: 32px 40px;
  bottom: -110px;

  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);

  img {
    all: unset;
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const HGroup = styled.hgroup`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    ${mixins.fonts.titleL}
  }

  p {
    ${mixins.fonts.textM}
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;

  span {
    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
    color: ${props => props.theme["base-subtitle"]};

    svg {
      color: ${props => props.theme["base-label"]};
    }
  }
`
