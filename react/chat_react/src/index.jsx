import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/static/css/main.scss'
import {Footer} from '@/component/layout/Footer'
import {Header} from "@/component/layout/Header";
import {SideBar} from "@/component/layout/SideBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import store from '@/redux/index.js';
import {SIDE_BAR} from "@/constant";

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
                        {
                            SIDE_BAR.map(elem => {
                                const {path, component, title} = elem
                                return <Route path={path} element={component} key={title} />
                            })
                        }
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
