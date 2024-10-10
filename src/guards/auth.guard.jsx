import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../utils/token"
import { publics } from "../routes/routes"

export const AuthGuardPrivate = () => {
  const userState = !!getToken()
  return userState ? <Outlet /> : <Navigate replace to={publics.HOME} />
}

export default AuthGuardPrivate

export const AuthGuardPublic = () => {
  const userState = !!getToken()
  return userState ? <Navigate replace to={publics.HOME} /> : <Outlet />
}
