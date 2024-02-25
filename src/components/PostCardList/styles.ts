import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 416px);
  justify-content: center;
  list-style: none;

  max-width: 864px;
  padding-top: 72px;
  margin: auto;
  
  grid-row-gap: 40px;
  grid-column-gap: 32px;

  @media (max-width: 296px) {
    grid-template-columns: 1fr;
  }
`
