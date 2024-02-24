import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { ProfileHeader } from "./components/ProfileHeader"
import { SearchForm } from "./components/SearchForm"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProfileHeader />
      <SearchForm />
    </ThemeProvider>
  )
}

export default App
