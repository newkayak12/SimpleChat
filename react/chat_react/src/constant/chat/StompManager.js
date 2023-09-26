import {Client} from "@stomp/stompjs";
import {append, setUUID} from '@/redux/actions/chat'
import { v4 as uuidv4 } from 'uuid';

const handshakeUrl= "ws://localhost:1000/ws"
const subscribeUrl = "/subscribe"
const publishUrl =  "/send/message"


let client
let store
const UUID = uuidv4()


const initialize = () => {
    if(client) return true
    client = new Client({
        brokerURL: handshakeUrl,
        debug: function (str) {
            console.log(`STOMP LOG :: \n${str}` );
        },
        onConnect: (frame) => {
            console.log("CONNECT :: ", frame)
            subscribe()
        },
        onDisconnect: (frame) => { console.log("CONNECT", frame) }
    })

    connect()
}
const connect = () => { if(client)  client.activate() }
const subscribe = () => {

    store.dispatch(setUUID(UUID))

    const subscription = client
        .subscribe(
            subscribeUrl,
            (message) => {
                console.log("MSG:::::",message)
                const response = JSON.parse(message.body);
                store.dispatch(append(response))
            },
            {UUID:UUID}
        )

    console.log(subscription)
}
const disconnect = async () => {  return await client.deactivate() }
const unsubscribe = () => {  return client.unsubscribe() }
const publish = (msg = "") => {
    let container = { msg:msg , type:"MESSAGE", uuid: UUID}
    client.publish({
        headers:{"content-type":"text/plain;charset=UTF-8"},
        destination: publishUrl,
        body:JSON.stringify(container),
        skipContentLengthHeader: true
    });
}

export const initializeStomp =  async (storeObj) => {
    store = storeObj
   initialize()
}
export const deInitializedStomp = async () => {
    if( client && client.connected && unsubscribe() && await disconnect() ) client = null;
}
export const send = (msg) => publish(msg)