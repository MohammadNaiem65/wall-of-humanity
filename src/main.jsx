import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import MyGallery from './components/MyGallery/MyGallery.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
			{
				path: '/my-gallery',
				element: <MyGallery />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</React.StrictMode>
);
