import { createBrowserRouter } from 'react-router-dom'
import _404 from './../errors/_404'
import RootLayouts from './../layouts/RootLayouts'
import Home from './../pages/Home'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayouts />,
        children: [
            {
                path: '/',
                lazy: () => import('./../pages/Home'),
                index: true,
                element: <Home />
            }
        ],
        errorElement: <_404 />,

    }
])

export default routes