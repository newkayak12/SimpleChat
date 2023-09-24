import {Client} from "@stomp/stompjs";
import {CHAT} from "@/constant";
import {append} from "@/redux/actions/chat";
const {
    handshakeUrl,
    subscribeUrl,
    publishUrl,
} = CHAT

let client


const connect = () => { return client.activate() }
const subscribe = () => {
    client.subscribe(subscribeUrl, (message) => {
        const response = JSON.parse(message.body);
        // store.dispatch(append(response))
    })
}
const disconnect = async () => {  return await client.deactivate() }
const unsubscribe = () => {  return client.unsubscribe() }
const publish = (msg = "") => {
    client.publish({
        destination: publishUrl,
        body: JSON.stringify({ msg })
    });
}

export const initializeStomp =  () => {
    // client = new Client({
    //     brokerURL: handshakeUrl,
    //     debug: function (str) {
    //         console.log(str);
    //     },
    //     onConnect: (frame) => { console.log("CONNECT", frame) },
    //     onDisconnect: (frame) => { console.log("CONNECT", frame) }
    // })
    // if( client  && client.activate() && console.log(connect())) {
    //     // subscribe()
    // }
}
export const deInitializedStomp = async () => {
    if( unsubscribe() && await disconnect() ) client = null;
}
export const send = (msg) => publish(msg)