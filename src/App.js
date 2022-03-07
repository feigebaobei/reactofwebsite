// import './App.css';
import {useEffect, useState} from 'react'
import AppContext from './store/AppContext'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import routes from './routes/index'
import {
  // increment,
  // decrement,
  token as tokenAction
} from './store/actions'
import { useSelector, useDispatch
} from 'react-redux'
// import { use } from '../../ws-end/routes/students';
// import NotFound from './pages/NotFound'

let {log} = console // for test

let App = () => {
  // let [isLoggedIn, setIsLoggedIn] = useState(false)
  // let [user, setUser] = useState({})
  let [isLoading, setIsLoading] = useState(true)
  let dispatch = useDispatch()

  let token = useSelector(state => state.token)
  let tokenFromSession = sessionStorage.getItem('token')
  if (tokenFromSession) {
    dispatch(tokenAction(tokenFromSession))
  }
  log('token', tokenFromSession)
  
  useEffect(() => {
    // log('useEffect', isLoggedIn)
    setIsLoading(false)
    // 获取用户信息
  }, [])

  if (isLoading) {
    return <Loading/>
  } else {
    return (
      <div>
          <Routes>
            {routes.map((route, index) => {
              if (route.protected === 'auth') {
                if (token) {
                  return (<Route
                    exact={route.exact}
                    path={route.path}
                    element={route.component()}
                    key={index}
                  ></Route>)
                } else {
                  return (<Route
                    exact
                    path={route.path}
                    element={<Navigate to="/login" replace={true} />}
                    key={index}
                    ></Route>)
                }
              } else {
                return (<Route
                  exact={route.exact}
                  path={route.path}
                  element={route.component()}
                  key={index}
                ></Route>)
              }
            })}
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        {/* <AppContext.Provider value={[isLoggedIn, user]}>
        </AppContext.Provider> */}
      </div>
    )
  }
  // return (<div>
  //     app
  // </div>)
}
export default App