const productReducer = (state, action) => {

    if (action.type === "LOADING") {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === "UPDATE_ERROR") {
        return {
            ...state,
            loading: false,
            error: true
        }
    }

    if (action.type === "LOADING_PRODUCT_DETAIL") {
        return {
            ...state,
            productDetailLoading: true,
            error: true
        }
    }

    if (action.type === "PRODUCT_DETAILS_ERROR") {
        return {
            ...state,
            productDetailLoading: false,
            error: true
        }
    }

    if (action.type === "PRODUCT_DATA") {
        const featureFilteredData = action.payload.filter((e) => {
            return e.featured === true
        })
        return {
            ...state,
            loading: false,
            products: action.payload,
            featureProducts: featureFilteredData
        }
    }

    if (action.type === "PRODUCT_DETAILS_DATA") {
        return {
            ...state,
            loading: false,
            productDetailLoading: false,
            productDetails: action.payload
        }
    }

}

export default productReducer;