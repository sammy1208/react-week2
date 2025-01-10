import axios from 'axios'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [account, setAccount] = useState(
    {
      username: "qa821746@gmail.com",
      password: "az821746"
    }
  );

  const inputChange =(e) => {
    const { value, name } = e.target;

    setAccount({
      ...account,
      [name]:value
    })    
  };

  const login = (e) =>{
    e.preventDefault();

    axios.post(`${import.meta.env.VITE_BASE_URL}/v2/admin/signin`,account)
      .then((res) => setIsAuth(true))
      .catch((err) => console.dir(err))
  }

  return (
    <>
      {isAuth ? <p>ewew</p> : <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="mb-5">請先登入</h1>
        <form onSubmit={login} className="d-flex flex-column gap-3">
          <div className="form-floating mb-3">
            <input name="username" value={account.username} onChange={inputChange} type="email" className="form-control" id="username" placeholder="name@example.com" />
            <label htmlFor="username">Email address</label>
          </div>
          <div className="form-floating">
            <input name="password" value={account.password} onChange={inputChange} type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn btn-primary">登入</button>
        </form>
        <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
      </div>}
    </>
  )
}


export default App
