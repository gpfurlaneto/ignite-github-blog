import { Issue } from "../../pages/Home";
import { PostCard } from "../PostCard";
import { Container } from "./styles";

type PostCardListProps = {
  issues: Issue[]
}
export function PostCardList({ issues }: PostCardListProps) {
  return (
    <Container>
      {issues.map(issue => <PostCard key={issue.id} issue={issue} />)}
    </Container>
  )
}