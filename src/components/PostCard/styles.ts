import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  gap: 32px;

  box-sizing: border-box;
  padding: 32px;

  border-radius: 10px;
  border: solid 1px transparent;
  background-color: ${props => props.theme["base-post"]};

  text-decoration: none;

  p {
    ${mixins.fonts.textM}
    color: ${props => props.theme["base-text"]};
  }

  &:hover {
    border: solid 1px ${props => props.theme["base-label"]};
  }
`

export const HeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: row;
  gap: 16px;

  h1 {
    ${mixins.fonts.titleM}
    color: ${props => props.theme["base-title"]};
    max-width: 280px;
  }

  span {
    min-width: fit-content;
    ${mixins.fonts.textS}
    color: ${props => props.theme["base-span"]};
  }
`