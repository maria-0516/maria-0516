import React from 'react';
import {
  Routes,
  Route,
  Router,
  Link,
  useRoutes,
  BrowserRouter
} from "react-router-dom";

import 'focus-visible'

import Home from './pages/Home';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';

let AppRoutes = () => {
	const _routes = [
		{ path: "/", element: <Home /> },
		{ path: "/login", element: <Login /> },
		{ path: "/register", element: <Register /> },
	];
	return useRoutes(_routes);
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
