import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const LinkComponent = styled(Link)`
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