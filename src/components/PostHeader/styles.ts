import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`

export const HGroup = styled.hgroup`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    ${mixins.fonts.titleL}
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
