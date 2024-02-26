import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../Link";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, HGroup, HeaderInfo, HeaderTitle, LinksContainer } from "./styles";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Issue } from "../../contexts/GithubBlogContext";

type PostHeaderProps = {
  issue: Issue
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <Container>
      <LinksContainer>
        <Link to="/" prefixIcon={faChevronLeft}>voltar</Link>
        <Link to={issue.url} target="_blank" sufixIcon={faArrowUpRightFromSquare}>ver no github</Link>
      </LinksContainer>
      <HeaderTitle>
        <HGroup>
          <h1>{issue.title}</h1>
        </HGroup>
        <HeaderInfo>
          <span><FontAwesomeIcon width={18} height={18} icon={faGithub} />{issue.user}</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faCalendarDay} />Há {issue.age} dia{issue.age > 1 ? 's' : ''}</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faComment} />{issue.comments} comentário{issue.comments > 1 ? 's' : ''}</span>
        </HeaderInfo>
      </HeaderTitle>
    </Container>
  )
}