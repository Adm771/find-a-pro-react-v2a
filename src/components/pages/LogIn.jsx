import UserContext from '../../contexts/UserContextProvider'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/shared/Header'

import React, { useContext, useState } from 'react'

function LogIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  let navigate = useNavigate();

  const { users, loggedUser, setLoggedUser } = useContext(UserContext)

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(users)
    const verifiedUser = await users.filter(dataUser => dataUser.email === email && dataUser.password === password)[0];
    await setLoggedUser(verifiedUser)
    console.log(loggedUser)
    navigate("/my-profile")
  }

  return (
    <div>
        <Header title="Log in"/>
        < form className="form-control">
          <input value={email} type="text" placeholder="Login" onChange={(e) => setFormData((prevState) => ({...prevState, email : e.target.value,}))}></input>
          <input value={password} type="text" placeholder="Password" onChange={(e) => setFormData((prevState) => ({...prevState, password : e.target.value,}))}></input>
          <input type="submit" value="Log in" onClick={onSubmit} className="btn1"></input>
        </form>
    </div>
  )
}

export default LogIn
