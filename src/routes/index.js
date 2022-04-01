import Home from '../pages/Home/index.js'
import Query from '../pages/Query/index.js'
import LevelCert from '../pages/Query/LevelCert'
import Login from '../pages/Login/index.js'
import First from '../pages/First/index.js'
import Entry from '../pages/Entry/index.js'

let routeList = [
    {
        path: '/',
        exact: true,
        component: () => <Home/>,
        protected: null
    },
    {
        path: '/query',
        exact: true,
        component: () => <Query/>,
        protected: null
    },
    {
        path: '/levelCert',
        exact: true,
        component: () => <LevelCert/>,
        protected: null
    },
    {
        path: '/first',
        exact: true,
        component: () => <First/>,
        protected: null
    },
    {
        path: '/manage/*',
        exact: false,
        component: () => <Entry/>,
        protected: 'auth'
    },
    // {
    //     path: '/manage/index',
    //     exact: true,
    //     component: () => <Login/>,
    //     protected: 'auth'
    // },
    {
        path: '/login',
        exact: true,
        component: () => <Login/>,
        protected: 'guest'
    },
]
export default routeList