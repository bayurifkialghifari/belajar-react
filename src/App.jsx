import {
  Routes, Route
} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import Home from './container/Home'

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