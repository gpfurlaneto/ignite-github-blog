import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { PostHeader } from "../../components/PostHeader/indext";
import { Content } from "./styles";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Issue, REPO, USERNAME } from "../../contexts/GithubBlogContext";

async function loadIssue(postId: string): Promise<Issue> {
  const response = await api.get(`/repos/${USERNAME}/${REPO}/issues/${postId}`)
  return {
    ...response.data,
    url: response.data.html_url,
    user: response.data.user.login
  }
}

export function Post() {

  const navigate = useNavigate()
  const { postId } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  const loadPost = useCallback(async (): Promise<void> => {
    if (postId) {
      const issue = await loadIssue(postId)
      setIssue(issue)
    } else {
      navigate('/')
    }
  }, [navigate, postId])

  useEffect(() => {
    loadPost()
  }, [loadPost, postId])

  if (!issue) {
    return null
  }

  return (
    <Layout header={<PostHeader issue={issue} />}>
      <Content>
        <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
      </Content>
    </Layout>
  )
}