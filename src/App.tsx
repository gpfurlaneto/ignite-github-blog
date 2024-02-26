import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { GithubBlogContextPropvider } from "./contexts/GithubBlogContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubBlogContextPropvider>
        <Outlet />
      </GithubBlogContextPropvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
