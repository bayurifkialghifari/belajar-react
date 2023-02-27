import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { createOrGetUser } from "../utils";

const Login = () => {
  const user = false;
  return (
    <div>
      {
        user ? (<div>Logged in</div>)
        : <GoogleLogin
            onSuccess={(res) => createOrGetUser(res)}
            onError={(err) => console.log(err)}
          />
      } 
      Login
    </div>
  )
}

export default Login