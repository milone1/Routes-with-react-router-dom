import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models'
import { resetUser } from '../../redux/states/user'
import { clearLocalStorage } from '../../utilities'
import { useDispatch } from 'react-redux'
const LogOut = () => {
  const naviagte = useNavigate()
  const dispatch = useDispatch()
  const loginOut = () => {
    clearLocalStorage('user')
    dispatch(resetUser())
    naviagte(PublicRoutes.LOGIN, {replace: true})
  }
  return (
    <button onClick={loginOut}>Log Out</button>
  )
}

export default LogOut