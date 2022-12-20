import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import { useRouter } from 'next/router'


const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })  
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    
    
  }

  return (
    
      <><Head>
      <title>Kaydol</title>
    </Head><div>
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5">
                  <img src="Adsız.png" alt="logo" width={200} />
                </div>
                <div className="card shadow-lg">
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">Kaydol</h1>

                    <form method="POST" className="needs-validation" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="name">İsim Soyisim</label>
                        <input id="name" type="text" className="form-control" name="name" value={name} onChange={handleChangeInput} />
                      </div>

                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
                        <input id="email" type="email" className="form-control" name="email" aria-describedby="emailHelp" value={email} onChange={handleChangeInput} />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="exampleInputPassword1">Şifre</label>
                        <input id="password" type="password" className="form-control" name="password" value={password} onChange={handleChangeInput} />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="exampleInputPassword2">Şifrenizi tekrar giriniz</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" name="cf_password" value={cf_password} onChange={handleChangeInput} />
                      </div>
                      
                     
                      <div className="align-items-center d-flex">
                        <button type="submit" className="btn ms-auto">
                          Kaydol
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer py-3 border-0">
                   
                  </div>
                </div>
                <div className="text-center mt-5 text-muted">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div></>
    
  );
}

export default Register;
