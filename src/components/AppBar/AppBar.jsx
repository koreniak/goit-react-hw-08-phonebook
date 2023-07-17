import AuthNav from "components/AuthNav"
import Navigation from "components/Navigation"
import UserMenu from "components/UserMenu"
import { useAuth } from "hooks/useAuth";
import { Bar } from "./AppBar.styled";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Bar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Bar>
  )
}

export default AppBar
