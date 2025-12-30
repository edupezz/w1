import { GlobalStyle } from "./GlobalStyles";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainPage />
    </BrowserRouter>
  )
}

export default App
