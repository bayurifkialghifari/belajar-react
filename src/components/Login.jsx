import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { createOrGetUser } from "../utils"
import { useNavigate } from "react-router-dom"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"

const Login = () => {
  const user = false;
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