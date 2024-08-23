import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import SurveyGroups from './components/Profile/SurveyGroups';
import SurveyQuestions from './components/Profile/SurveyQuestions';
import Required from './pages/Required';

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <SurveyGroups />,
          },
          {
            path: ':groupId',
            element: <SurveyQuestions />,
          },
        ],
      },
    ],
  },
  {
    path: 'required',
    element: <Required />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;