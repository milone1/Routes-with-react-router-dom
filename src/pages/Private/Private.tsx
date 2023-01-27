import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import { RoutesWidthNotFound } from "../../utilities"

const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

const Private = () => {
  return (
    <RoutesWidthNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWidthNotFound>
  )
}

export default Private