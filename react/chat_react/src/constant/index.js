import {Main} from '@/views/main/Main'
import {Chat} from '@/views/chat/Chat'
import { fas } from '@fortawesome/free-solid-svg-icons'
const { faSwatchbook, faHeading, faCommenting } = fas


export const SIDE_BAR = [
    {
        title:'logo',
        path:'/',
        icon: faHeading,
        iconColor: "red",
        component: <Main/>
    },
    {
        title:'chat',
        path:'/chat',
        icon: faCommenting,
        iconColor: "orange",
        component: <Chat/>
    },
]