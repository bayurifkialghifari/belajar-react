import {
  Routes, Route, useNavigate
} from "react-router-dom"
import lazyLoad from "./lazyLoad"
import { GoogleOAuthProvider } from '@react-oauth/google'

const Login = lazyLoad('components/Login')
const Home = lazyLoad('container/Home')

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App