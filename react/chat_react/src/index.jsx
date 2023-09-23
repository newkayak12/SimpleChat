import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/static/css/main.scss'
import {Footer} from '@/component/layout/Footer'
import {Header} from "@/component/layout/Header";
import {SideBar} from "@/component/layout/SideBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "@/views/Main";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import store from '@/redux/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <div className={"top_wrap"}>
                <SideBar/>
                <div className={"inner_wrap"}>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Main/>} />
                        <Route path={"/1"} element={<Main/>} />
                        <Route path={"/2"} element={<Main/>} />
                    </Routes>
                    <Footer/>
                </div>
            </div>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
