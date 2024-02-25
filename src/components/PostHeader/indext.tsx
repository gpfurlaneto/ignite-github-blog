import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../Link";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, HGroup, HeaderInfo, HeaderTitle, LinksContainer } from "./styles";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
export function PostHeader() {
  return (
    <Container>
      <LinksContainer>
        <Link href="#" prefixIcon={faChevronLeft}>voltar</Link>
        <Link href="#" sufixIcon={faArrowUpRightFromSquare}>ver no github</Link>
      </LinksContainer>
      <HeaderTitle>
        <HGroup>
          <h1>JavaScript data types and data structures</h1>
        </HGroup>
        <HeaderInfo>
          <span><FontAwesomeIcon width={18} height={18} icon={faGithub} />cameronwll</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faCalendarDay} />Rocketseat</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faComment} />32 seguidores</span>
        </HeaderInfo>
      </HeaderTitle>
    </Container>
  )
}