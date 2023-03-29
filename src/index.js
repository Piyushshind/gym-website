import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './components/home/SignUp';
import Login from './components/home/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './views/Error';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App />}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='*' element={<Error />}></Route>
    
  </Routes>
  </BrowserRouter>
    
 
);
 

