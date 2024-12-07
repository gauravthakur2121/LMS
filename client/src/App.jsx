import './App.css';
import Login from './Pages/Login';
import MainLayout from './layout/MainLayout';
import HeroSection from './Pages/student/HeroSection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './Pages/student/Courses';
import MyLearning from './Pages/student/MyLearning';
import Profile from './Pages/student/Profile';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
