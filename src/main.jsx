import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import StatsSection from './componant/Dashboard/StatsSection.jsx';
   import RequestPage from './componant/Dashboard/RequestPage.jsx';
   import ProfileReview from './componant/Dashboard/ProfileReview.jsx';
   import DiveExperienceProfile  from './componant/Dashboard/DiveExperienceProfile.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // This could be used for a default component inside MainContent
        element: <StatsSection />,// Replace this with your main content component if needed
      },
      {
        path: "/home", // This could be used for a default component inside MainContent
        element:<RequestPage></RequestPage>// Replace this with your main content component if needed
      },
      {
        path: "/user", // This could be used for a default component inside MainContent
        element:<ProfileReview></ProfileReview>// Replace this with your main content component if needed
      },
      {
        path: "/experience", // This could be used for a default component inside MainContent
        element:<DiveExperienceProfile ></DiveExperienceProfile>// Replace this with your main content component if needed
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
