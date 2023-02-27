import jwt_decode from 'jwt-decode'

export const createOrGetUser = async (response) => {
  const decoded = jwt_decode(response.credential)
  const {
    name,
    email,
    picture,
    sub
  } = decoded

  console.log(name, email, picture, sub)
}