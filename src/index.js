import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
// import './scss/style.scss';
import  router  from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

