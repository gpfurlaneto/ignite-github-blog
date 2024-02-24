import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  gap: 8px;

  max-width: 864px;
  padding-top: 72px;
  margin: auto;

  input {

    border-radius: 6px;
    padding: 12px 16px;
    ${mixins.fonts.textM}

    color: ${props => props.theme["base-text"]};
    
    background-color: ${props => props.theme["base-input"]};

    border: solid 1px ${props => props.theme["base-border"]};

    &:placeholder {
      color: ${props => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${props => props.theme.blue};
    }
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  label {
    ${mixins.fonts.titleS}
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]}
  }

  span {
    ${mixins.fonts.textS}
    color: ${props => props.theme["base-span"]}
  }
`