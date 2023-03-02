import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { client } from "../client"
import jwt_decode from "jwt-decode"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"

const Login = () => {
  const user = false;
  const navigate = useNavigate()

  // Create or get user
  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    const {
      name,
      email,
      picture,
      sub
    } = decoded
    
    // Save decoded data
    localStorage.setItem('user', JSON.stringify(decoded))
  
    const doc = {
      _id: sub,
      _type: 'user',
      userNmae: name,
      image: picture,
    }
  
    // Create user if not exists
    client.createIfNotExists(doc)
      .then(() => {
        navigate('/ggwp', { replace: true })
    })
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="Logo" />
          </div>
          <div className="shadow-2xl">
            {
              user ? (<div>Logged in</div>)
              : <GoogleLogin
                  onSuccess={(res) => createOrGetUser(res)}
                  onError={(err) => console.log(err)}
                />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login