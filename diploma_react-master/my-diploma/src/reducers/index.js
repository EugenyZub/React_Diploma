const initialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED': 
            return {
                ...state,
                loading: true,
                error: false
            }
        case 'MENU_ERROR': 
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducer;