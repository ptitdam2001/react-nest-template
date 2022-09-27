import { RestExample } from '../application/Example'
import { Home } from '../application'

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/rest-example',
    element: <RestExample />,
  },
]
