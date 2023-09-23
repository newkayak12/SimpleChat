import {useMemo} from "react";
import {useSelector} from "react-redux";


export const Header = () => {

    const header = useSelector(state => state.layout.header)
    const isHeader = useMemo(()=> header, [header])

    return (
        <>
            {  isHeader ?
                <header className={"header"}>
                    <div className={"container"}>
                        <div className={"mock"}>
                            <h3 className={"head-line-6"}>Header Area</h3>
                        </div>
                    </div>
                </header>
                :""
            }
        </>
    )
}