import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routesCodes } from '../js/routeCodes';

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(routesCodes.HOME)
  })
  return null
}

export default Error