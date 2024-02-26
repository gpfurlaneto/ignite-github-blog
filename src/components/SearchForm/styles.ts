import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const FormItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  input {
    width: 100%;
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

    &:disabled {
      background-color: ${props => props.theme["base-border"]};
    }
  }

  span {
    margin-left: 4px;
    color: red;
    ${mixins.fonts.textM}
  }

  svg {
    position: absolute;
    top: 36px;
    right: 10px;
  }
`