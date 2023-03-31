import {Routes,Route,BrowserRouter} from "react-router-dom"
import { GlobalStyle } from './global/GlobalStyle'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./components/Login/Login"
import Home from "./pages/Home"
import { UserStorage } from "./global/UserContext"
import User from "./components/User/User"
import ProtectedRoute from "./components/Interfaces/ProtectedRoute"
import Photo from "./components/Interfaces/Photos/Photo"



function App() {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login/*" element={<Login />}/>
            <Route 
              path="conta/*" 
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>}
            />
            <Route path="foto/:id" element={<Photo />}/>
          </Routes>
          <Footer />  
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
