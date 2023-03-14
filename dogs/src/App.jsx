import {Routes,Route,BrowserRouter} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./components/Login"
import Home from "./pages/Home"



function App() {
//https://dogsapi.origamid.dev/json/
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  )
}

export default App
