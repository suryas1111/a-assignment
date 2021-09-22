import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contactList: [],
    infobyid:{},
    showloader:true
};

export const ContactList=(state=initialState, action) =>{
    switch (action.type) {
    case actionTypes.CONTACT_LIST:
        return { ...state, contactList: [...action.payload] , showloader:false}
    case actionTypes.SINGLE_CONTACT_INFO:
        return {...state,infobyid:state.contactList.find(obj => {
            return obj.id === action.payload
        })}
    case actionTypes.SPINNER:
        return {...state,showloader:true}
    case actionTypes.UPDATE_CONTACT_INFO:
        return Object.assign({},state,{
            contactList:state.contactList.map((ele)=>{
                if(ele.id===action.payload.id){
                    return Object.assign({},ele,{
                        name:action.payload.name,
                        email:action.payload.email,
                        address:Object.assign({},ele.address,{city:action.payload.city}),
                        phone:action.payload.phone,
                        website:action.payload.website,
                        company:Object.assign({},ele.company,{name:action.payload.companyName})
                    })
                }else{
                    return ele;
                }
            })
        })

        
    default:
        return state
    }
}