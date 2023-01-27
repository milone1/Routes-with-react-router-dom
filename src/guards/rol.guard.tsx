import React from 'react'
import { Rols } from '../models/rols'
import { AppStore } from '../redux/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes } from '../models'
interface Props {
    rol: Rols
}
const RolGuard = ({rol}: Props) => {
    const userState = useSelector((store: AppStore) => store.user)
  return userState.rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}

export default RolGuard