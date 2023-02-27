import {
  Routes, Route, useNavigate
} from "react-router-dom"
import lazyLoad from "./lazyLoad"
import { GoogleOAuthProvider } from '@react-oauth/google'

const Login = lazyLoad('components/Login')
const Home = lazyLoad('container/Home')

function App() {
  return (
    <GoogleOAuthProvider clientId="610751717845-04e14ie85a0qpd7ic7iko38ad18i2qpa.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App