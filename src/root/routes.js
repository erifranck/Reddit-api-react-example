import {AppPage} from 'main'
import mainRoutes from 'main/routes'

const routes = [
  {
    path: '/',
    component: AppPage,
    routes: [
      // main routes always should be in the bottom
      ...mainRoutes
    ]
  }
]

export default routes
