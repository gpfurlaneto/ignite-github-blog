import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export const USERNAME = 'gpfurlaneto'
export const REPO = 'ignite-github-blog'

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
  age: number
  url: string
  user: string
  comments: number
}

type GithubBlogContextType = {
  user?: User,
  issues?: Issue[]
  handleSearch: (searchTerm: string) => Promise<void>
}

type GithubBlogContextPropviderProps = {
  children: ReactNode
}

export const GithubBlogContext = createContext<GithubBlogContextType>({} as GithubBlogContextType)

export function GithubBlogContextPropvider({
  children,
}: GithubBlogContextPropviderProps): ReactElement {

  const [user, setUser] = useState<User>()
  const [issues, setIssues] = useState<Issue[]>()

  const loadUser = async (): Promise<void> => {
    const response = await api.get(`/users/${USERNAME}`)
    setUser({
      ...response.data,
      gitUrl: response.data.html_url,
      avatarUrl: response.data.avatar_url
    })
  }

  const handleSearch = async (searchTerm: string): Promise<void> => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:${USERNAME}/${REPO} is:issue ${searchTerm}`,
      }
    })
    setIssues(response.data.items.map((item: Record<string, unknown>) => {
      const diff = new Date().getTime() - new Date(item.created_at as string).getTime();
      const age = Math.round(diff / (1000 * 3600 * 24));
      return ({
        ...item,
        url: item.html_url,
        id: item.number,
        age
      })
    }))
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <GithubBlogContext.Provider
      value={{
        user,
        issues,
        handleSearch
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
