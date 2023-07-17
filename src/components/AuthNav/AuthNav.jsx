// import { NavLink } from "react-router-dom"
import { AuthLink } from "./AuthNav.styled"

const AuthNav = () => {
  return (
    <div>
      <AuthLink to="/register">
        Register
      </AuthLink>
      <AuthLink to="/login">
        Log In
      </AuthLink>
    </div>
  )
}

export default AuthNav
