import React from 'react';

import Header from './Index/header';
export const Routesweb = [
	{
		path: '/',
		element: <Adminweb />,
		index: true
	},
	{
		path: '/Add',
		element: <Add />,
		index: false
	},
	{
		path: '/edit/:id',
		element: <Edit />,
		index: false
	},
	{
		path: '/Register',
		element: <Register />,
		index: false
	}

]

