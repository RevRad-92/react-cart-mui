const initialState = {
    products: [],
}

const ADD_PRODUCT = 'ADD_PRODUCT'

export const addProducts = (products) => {
    return {
        type: ADD_PRODUCT,
        payload: products
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }

        default: {
            return state
        }
    }
}

export default reducer