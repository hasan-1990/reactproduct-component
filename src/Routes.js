// Desc: Routes for the application
import About from './About';
import React from 'react';
import Book from './Book';


let Routes = [
    {
        path: '/About', element: <About />
    },

    {
        path: '/Book', element: <Book />
    },
]

export default Routes;