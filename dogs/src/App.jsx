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
import UserProfile from "./components/User/UserProfile"
import NotFound from "./pages/NotFound"



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <div className="AppBody">
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
              <Route path="perfil/:user" element={<UserProfile />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </div>
          <Footer />  
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
