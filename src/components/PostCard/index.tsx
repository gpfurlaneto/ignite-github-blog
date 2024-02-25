import { Issue } from "../../pages/Home";
import { Container, HeaderGroup, Content } from "./styles";
import removeMarkdown from "remove-markdown"

type PostCardProps = {
  issue: Issue
}
export function PostCard({ issue }: PostCardProps) {

  const diff = new Date().getTime() - new Date(issue.createdAt).getTime();
  const days = Math.round(diff / (1000 * 3600 * 24));

  return <Container href='#'>
    <HeaderGroup>
      <h1>{issue.title}</h1>
      <span>Há {days} dia{days > 1 ? 's' : ''}</span>
    </HeaderGroup>
    <Content>{removeMarkdown(issue.body)}</Content>
  </Container>
}