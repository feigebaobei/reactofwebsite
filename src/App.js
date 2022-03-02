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
// import { use } from '../../ws-end/routes/students';
// import NotFound from './pages/NotFound'

let {log} = console // for test

let App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [user, setUser] = useState({})
  let [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(false)
    // 获取用户信息
  }, [])

  if (isLoading) {
    return <Loading/>
  } else {
    return (
      <div>
        <AppContext.Provider value={[isLoggedIn, user]}>
          <Routes>
            {routes.map((route, index) => {
              log('route', route)
              if (route.protected === 'auth') {
                // for test
                // if (isLoggedIn) {} else {}
                return (<Route
                  exact
                  path={route.path}
                  element={route.component()}
                  key={index}
                >
                </Route>)
              } else {
                return (<Route
                  exact
                  path={route.path}
                  element={route.component()}
                  key={index}
                ></Route>)
              }
            })}
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </AppContext.Provider>
      </div>
    )
  }
  // return (<div>
  //     app
  // </div>)
}
export default App