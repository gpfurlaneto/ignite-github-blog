import { Issue } from "../../contexts/GithubBlogContext";
import { Container, HeaderGroup, Content } from "./styles";
import removeMarkdown from "remove-markdown"

type PostCardProps = {
  issue: Issue
}
export function PostCard({ issue }: PostCardProps) {
  return <Container to={`/post/${issue.id}`}>
    <HeaderGroup>
      <h1>{issue.title}</h1>
      <span>Há {issue.age} dia{issue.age > 1 ? 's' : ''}</span>
    </HeaderGroup>
    <Content>{removeMarkdown(issue.body)}</Content>
  </Container>
}