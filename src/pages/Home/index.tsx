import { api } from "../../lib/axios";
import { Layout } from "../../components/Layout";
import { PostCardList } from "../../components/PostCardList";
import { ProfileHeader } from "../../components/ProfileHeader";
import { SearchForm } from "../../components/SearchForm";
import { useEffect, useState } from "react";

const USERNAME = 'gpfurlaneto'
const REPO = 'ignite-github-blog'

export type User = {
  name: string
  bio: string
  company: string
  login: string
  followers: number
  avatarUrl: string
  gitUrl: string
}

export type Issue = {
  id: number
  title: string
  body: string
  createdAt: Date
}

export function Home() {

  const [user, setUser] = useState<User>()
  const [issues, setIssues] = useState<Issue[]>([])

  const loadUser = async (): Promise<void> => {
    const response = await api.get(`/users/${USERNAME}`)
    setUser({
      ...response.data,
      gitUrl: response.data.html_url,
      avatarUrl: response.data.avatar_url
    })
  }

  useEffect(() => {
    loadUser()
  }, [])


  const handleSearch = async (searchTerm: string): Promise<void> => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:${USERNAME}/${REPO} is:issue ${searchTerm}`,
      }
    })
    setIssues(response.data.items.map((item: Record<string, unknown>) => ({
      ...item,
      createdAt: item.created_at
    })))
  }

  return (
    <Layout header={user && <ProfileHeader user={user} />}>
      <SearchForm handleSearch={handleSearch} />
      <PostCardList issues={issues} />
    </Layout>
  )
}