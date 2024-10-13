
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Toastify from './components/toastify/Index'
import routes from './router/routes'

function App() {

  return (
    <>
      <Toastify />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
