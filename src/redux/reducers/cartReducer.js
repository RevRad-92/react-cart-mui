const initialState = {
    products: [],
}

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const RESET_CART = 'RESET_CART'

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const resetCart = () => {
    return {
        type: RESET_CART,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        case RESET_CART: {
            return {
                ...state,
                products: []
            }
        }

        default: {
            return state
        }
    }
}

export default reducer