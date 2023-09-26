import {memo} from "react";
import {useSelector} from "react-redux";
import dayjs from 'dayjs'
export const Bubble = memo( ({chat} ) => {
    const {msg, type, uuid} = chat

    const UUID = useSelector(state => state.chat.UUID)
    console.log(uuid === UUID)
    const renderBubble = () => {
        if( type === "MESSAGE") {
            return (
              <div className={["message", uuid === UUID ? "my":"others"].join(" ")}>
                  <div className={"bubble_container"}>
                      <div className={"bubble"}>
                          <div className={"tail"}></div>
                          {msg}
                      </div>
                      <p className={"date"}>{dayjs().format("YYYY.MM.DD hh:mm")}</p>
                  </div>
              </div>
            )
        } else {
            return (
                <div className={"notice"}>
                    <p>{msg}</p>
                </div>
            )
        }
    }

    return (
        <>
            {renderBubble()}
        </>
    )
})