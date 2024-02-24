import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const LinkComponent = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  color: ${props => props.theme.blue};

  text-transform: uppercase;
  text-decoration: none;

  ${mixins.fonts.link}

  &:hover {
    text-decoration: underline;
  }
`