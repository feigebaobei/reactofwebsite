import Query from '../pages/Query/index.js'
import Admin from '../pages/Admin/index.js'
import First from '../pages/First/index.js'

let routeList = [
    {
        path: '/',
        exact: true,
        component: () => <Query/>,
        protected: null
    },
    {
        path: '/q',
        exact: true,
        component: () => <Query/>,
        protected: null
    },
    {
        path: '/first',
        exact: true,
        component: () => <First/>,
        protected: null
    },
    {
        path: '/admin',
        exact: true,
        component: () => <Admin/>,
        protected: 'auth'
    },
]
export default routeList