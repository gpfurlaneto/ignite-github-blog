import { Layout } from "../../components/Layout";
import { PostCardList } from "../../components/PostCardList";
import { ProfileHeader } from "../../components/ProfileHeader";
import { SearchForm } from "../../components/SearchForm";
import { useGithubBlog } from "../../hooks/useGithubBlog";
import { FormContainer, LabelContainer, NoResultsContainer } from "./styles";

export function Home() {
  const { issues, handleSearch, user } = useGithubBlog()
  return (
    <Layout header={user && <ProfileHeader user={user} />}>
      <FormContainer>
        <LabelContainer>
          <label>Publicações</label>
          {!!issues && issues.length > 0 && (<span>{issues?.length} publicações</span>)}
        </LabelContainer>
        <SearchForm handleSearch={handleSearch} />
      </FormContainer>
      {!!issues && !!issues && issues.length > 0 && <PostCardList issues={issues} />}
      {issues && issues?.length === 0 && (
        <NoResultsContainer>Nenhuma issue encontrada para esta busca.</NoResultsContainer>
      )}
    </Layout>
  )
}