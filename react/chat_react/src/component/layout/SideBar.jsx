import {memo} from "react";
import {SideBarList} from '@/component/layout/SideBarList'
import {SIDE_BAR}  from '@/constant/index'


export const SideBar = memo(() => {
    const renderSideBarList = SIDE_BAR.map( (piece, index) =>  {
        const {title, path, icon, iconColor} = piece
        return <SideBarList title={title} path={path}
                            icon={icon} color={iconColor}
                            key={`side_bar_list_${index}`}/>
    })

    return (
        <nav className={'side_bar'}>
            <div className={"card_container"}>
                <ul className={"side_ul"}>
                    {renderSideBarList}
                </ul>
            </div>
        </nav>
    )
})