import {Routes,Route,BrowserRouter} from "react-router-dom"
import { GlobalStyle } from './global/GlobalStyle'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./components/Login/Login"
import Home from "./pages/Home"
import { UserStorage } from "./global/UserContext"



function App() {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login/*" element={<Login />}/>
          </Routes>
          <Footer />  
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
