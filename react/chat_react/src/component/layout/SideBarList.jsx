import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {memo, useMemo, useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom'
export const SideBarList = memo(({title, path, icon, color}) => {
    const {pathname} = useLocation()
    console.log(pathname=== path)
    const currentPath = useMemo(() => pathname === path, [pathname])
    const navigate = useNavigate()
    const fnRoute = path => navigate(path, {replace:true})

    return (
        <>
            <li className={"side_li"}>
                <div onClick={() => fnRoute(path)} className={"container"}>
                    <FontAwesomeIcon icon={icon} className={"icon"} style={{color: color ?? "black"}}/>
                    <p className={currentPath ? "on" : 'off'}>
                        {title}
                    </p>
                </div>
            </li>
        </>
    )
})