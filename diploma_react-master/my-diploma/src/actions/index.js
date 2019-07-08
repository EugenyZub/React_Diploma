const itemsLoaded = (newMenu) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newMenu
    };
};

const itemsRequested = () => {
    return {
        type: 'ITEMS_REQUESTED'
    };
};

const itemsError = () => {
    return {
        type: 'ITEMS_ERROR'
    };
};

const itemsDetails = (id) => {
    return {
        type: 'ITEM_DETAILS',
        payload: id
    }
}

const searchForm = (value) => {
    return {
        type: 'ITEM_SEACRCH',
        value
    }
}

export {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemsDetails,
    searchForm
};