import { Container, HGroup, HeaderContent, HeaderProfile, HeaderInfo } from './styles'

import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../Link'

export function ProfileHeader() {
  return <Container>
    <img src={logo} alt='Logo Git Hub Blog' />
    <HeaderContent>
      <img src={avatar} />
      <HeaderProfile>
        <HGroup>
          <div>
            <h1>Cameron Williamson</h1>
            <Link href='#' sufixIcon={faArrowUpRightFromSquare}>github</Link>
          </div>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        </HGroup>
        <HeaderInfo>
          <span><FontAwesomeIcon width={18} height={18} icon={faGithub} />cameronwll</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faUserGroup} />Rocketseat</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faBuilding} />32 seguidores</span>
        </HeaderInfo>
      </HeaderProfile>
    </HeaderContent>
  </Container >
}