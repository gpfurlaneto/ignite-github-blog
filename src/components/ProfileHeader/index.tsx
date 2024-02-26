import { HGroup, HeaderProfile, HeaderInfo, Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../Link'
import { User } from '../../contexts/GithubBlogContext'

type ProfileHeaderProps = {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <Container>
      <img src={user.avatarUrl} />
      <HeaderProfile>
        <HGroup>
          <div>
            <h1>{user.name}</h1>
            <Link to={user.gitUrl} target='_blank' sufixIcon={faArrowUpRightFromSquare}>github</Link>
          </div>
          <p>{user.bio}</p>

        </HGroup>
        <HeaderInfo>
          <span><FontAwesomeIcon width={18} height={18} icon={faGithub} />{user.login}</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faUserGroup} />{user.company}</span>
          <span><FontAwesomeIcon width={18} height={18} icon={faBuilding} />{user.followers} seguidores</span>
        </HeaderInfo>
      </HeaderProfile>
    </Container>
  )
}