import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'
import Images from './views/Images.tsx'
import NewImage, { action as newImageAction } from './views/NewImage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Images />,
      },
      {
        path: 'images/create',
        element: <NewImage />,
        action: newImageAction,
      },
    ],
  },
])
