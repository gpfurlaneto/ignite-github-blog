import { Layout } from "../../components/Layout";
import { PostCardList } from "../../components/PostCardList";
import { ProfileHeader } from "../../components/ProfileHeader";
import { SearchForm } from "../../components/SearchForm";

export function Home() {
  return (
    <Layout header={<ProfileHeader />}>
      <SearchForm />
      <PostCardList />
    </Layout>
  )
}