import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from '../src/components/home/SignUp'
import Login from './components/home/Login';
import { RecoilRoot } from 'recoil';
import AppPricing from './components/home/pricing';
import Activity1 from './components/Activity/Activity1';
import Activity from './components/Activity/Activity'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RecoilRoot>
  <Routes>
    <Route path='/' element={ <App />}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/AppPricing' element={<AppPricing/>}></Route>
    <Route path='/Activity' element={<Activity/>}></Route>
    <Route path='/Activity1' element={<Activity1/>}></Route>
    
  </Routes>
  </RecoilRoot>
  </BrowserRouter>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
