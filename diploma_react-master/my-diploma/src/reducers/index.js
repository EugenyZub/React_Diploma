const initialState = {
    items: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_LOADED': 
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case 'ITEMS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'ITEMS_ERROR': 
            return {
                ...state,
                loading: false,
                error: true
            };       
        case 'ITEM_DETAILS': 
            //const id = action.payload;
            //const item = state.items.find(item => item.id === id);

            // const newItem = {
            //     name: item.name,
            //     price: item.price,
            //     url: item.url,
            //     id: item.id
            // };
            return {
                ...state,
                // items: [
                //     newItem
                // ]
            };
        default: 
            return state;
    }
}

export default reducer;