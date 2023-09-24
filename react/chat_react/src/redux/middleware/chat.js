import {append} from "@/redux/actions/chat";

export const chatMiddleware =  store => next => action => {
    switch (action.type) {
        case append.type:
            break
        default:
            break
    }


    const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
    return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};
