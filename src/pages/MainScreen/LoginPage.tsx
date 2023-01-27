import { useEffect } from "react"
import { getData } from "../../services/getDataProduct";
import { useDispatch } from 'react-redux'
import { createUser, resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Rols } from "../../models";
import { clearLocalStorage } from "../../utilities";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage('user');
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const fetchData = async() => {
    try{
      const response = await getData()
      console.log('response',response)
      dispatch(createUser({ ...response.data, rol: Rols.USER }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      //! el naviagte hace login/algo mas
      // con esta propiedad hacemos el login/nueva ruta 
      //reemplaza la ruta 
    } catch(error: any) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={fetchData}>LOGIN</button>
    </div>   
  )
}

export default LoginPage