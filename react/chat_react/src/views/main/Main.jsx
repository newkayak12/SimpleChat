import logo from '@/assets/static/images/logo.svg'
import {memo, useEffect} from "react";
import {useStore} from "react-redux";
import {showHeader} from "@/redux/actions/layout";

export const Main = memo( () => {
    const store = useStore()
    useEffect(()=> {
        store.dispatch(showHeader(false))
    })


  return (
      <>
        <div className={"main"} role={"main"}>
            <div className={"container"}>
                <div className={"logo-container"}>
                    <img src={logo} className={"logo"}/>
                </div>
            </div>
        </div>
      </>
  );
})
