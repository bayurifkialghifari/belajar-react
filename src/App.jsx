import {
  Routes, Route, useNavigate
} from "react-router-dom"
import lazyLoad from "./lazyLoad"

const Login = lazyLoad('components/Login')
const Home = lazyLoad('container/Home')

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App