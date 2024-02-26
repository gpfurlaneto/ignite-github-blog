import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const FormContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 8px;

  padding-top: 72px;
  margin: auto;
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

export const NoResultsContainer = styled.div`
  margin-top: 72px;
`