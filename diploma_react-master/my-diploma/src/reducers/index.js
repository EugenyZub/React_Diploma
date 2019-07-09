const initialState = {
    items: [],
    curentArr: [],
    loading: true,
    error: false,
    value: ''  
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_LOADED': 
            return {
                ...state,
                items: action.payload,
                curentArr: action.payload,
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
        case 'ITEM_SEARCH':
            const value = action.value;
            const curentArray = state.items.filter(item => item.name.toLowerCase().includes(value.toLowerCase())); 

            return {
                ...state,
                curentArr: curentArray
            };
        case 'ITEMS_FILTER': 
            const filterName = action.filterName;
            const filtredArray = state.items.filter(item => item.country === filterName);

            return {
                ...state,
                curentArr: filtredArray 
            };

        default: 
            return state;
    }
}

export default reducer;