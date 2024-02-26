import { useContext } from 'react'

import { GithubBlogContext } from '../contexts/GithubBlogContext'

export function useGithubBlog() {
  return useContext(GithubBlogContext)
}
