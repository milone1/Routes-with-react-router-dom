import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Rols } from './models'
import { RoutesWidthNotFound } from './utilities'
import { Suspense, lazy } from 'react'
import store from './redux/store'
import { Provider } from 'react-redux';
import LogOut from './components/Logout/LogOut'
import { AuthGuard, RolGuard } from './guards'
import { Dashboard } from './pages/Private'
const LoginPage = lazy(() => import('./pages/MainScreen/LoginPage'))
const Private = lazy(() => import('./pages/Private/Private'))
function App() {

  return (
    <div>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Provider store={store}>
          <BrowserRouter>
            <LogOut />
            <RoutesWidthNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RolGuard rol={Rols.ADMIN} /> }>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWidthNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
