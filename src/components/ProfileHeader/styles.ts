import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  gap: 32px;
  
  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
  }

  img {
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
  gap: 20px
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

    /* @media (max-width: 900px) {
      flex-direction: column;
    } */
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
