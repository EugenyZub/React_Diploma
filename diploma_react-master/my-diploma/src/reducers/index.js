const initialState = {
    items: [],
    loading: true,
    error: false,
    value: '',
    works: []
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
        case 'ITEMS_DETAILS': 
            const id = action.id;

            const item = state.items.find(item => item.url.slice(item.url.indexOf('I') + 2,item.url.indexOf('_') - 1) === id);
            
            const newItem = {
                name: item.name,
                price: item.price,
                url: item.url,
                description: item.description,
                country: item.country
            };
            return {
                ...state,
                items: [
                    newItem
                ]
            };
        case 'ITEM_SEACRCH':
            const {value} = action;
            console.log(value);
            const works = state.items.filter(val => val.includes(value)); 
            return {
                ...state,
                value,
                works
            };
        default: 
            return state;
    }
}

export default reducer;