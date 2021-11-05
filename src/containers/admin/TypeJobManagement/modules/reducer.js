import { FETCH__LIST__TYPE__JOBS__FAIL, FETCH__LIST__TYPE__JOBS__SUCCESS } from "./type";

const initialState = {
    listTypeJob: [],
    errors: "",
}

 const typeJobsReducer =(state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH__LIST__TYPE__JOBS__SUCCESS:
            state.listTypeJob = payload;
            return { ...state }
            case FETCH__LIST__TYPE__JOBS__FAIL:
                state.error = payload;
                return { ...state }
        default:
            return state;
    }
}
export default typeJobsReducer;