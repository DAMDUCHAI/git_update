import { GET_ALL_FEEDBACK,VIEW_FEEDBACK } from "../constant/libraryManager/feedBackConstants";


const stateDefault = {
    feedbackList:[],
    feedback:{TieuDe:'',NoiDung:''}
   
}

const feedbackReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  GET_ALL_FEEDBACK: {
                state.feedbackList = action.feedbackList;
                
                return {...state};
        }


        case  VIEW_FEEDBACK: {
            state.feedback = action.feedback;
            
            return {...state};
    }
 

        default: return {...state}
    }
}

export default feedbackReducers