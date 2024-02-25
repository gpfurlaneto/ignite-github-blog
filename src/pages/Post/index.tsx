import { Layout } from "../../components/Layout";
import { PostHeader } from "../../components/PostHeader/indext";
import { Content } from "./styles";

export function Post() {
  return (
    <Layout header={<PostHeader />}>
      <Content>asd</Content>
    </Layout>
  )
}