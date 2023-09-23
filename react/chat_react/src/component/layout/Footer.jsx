import {useStore} from "react-redux";
import {useMemo} from "react";

export const Footer = () => {

    const {getState} = useStore()
    const { layout } = getState()
    const {footer} = layout
    const isFooter = useMemo(()=> footer, [footer])
    return (
       <>
           {
               isFooter  ?
                   <footer className={"footer"}>
                       <div className={"container"}>
                           <div className={"mock"}>
                               <h3 className={"head-line-6"}>Footer Area</h3>
                           </div>
                       </div>
                   </footer>
                   : ""
           }
       </>
    )
}