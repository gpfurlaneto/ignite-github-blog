import { Container, LabelContainer } from "./styles";

export function SearchForm() {
  return <Container>
    <LabelContainer>
      <label>Publicações</label>
      <span>6 publicações</span>
    </LabelContainer>
    <input placeholder="Buscas Conteúdo" />
  </Container>
}