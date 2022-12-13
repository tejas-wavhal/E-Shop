import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer"

const url = "https://api.pujakaitem.com/api/products"


const AppContext = createContext()
const AppContext2 = createContext()

const initialState = {
    loading: false,
    productDetailLoading:false,
    error: false,
    products: [],
    featureProducts: [],
    productDetails: {},
    productDetailsLoading: false
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const updateProducts = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const res = await axios.get(url)
            const result = await res.data
            dispatch({ type: "PRODUCT_DATA", payload: result })
        } catch (error) {
            dispatch({ type: "UPDATE_ERROR" })
        }
    }

    useEffect(() => {
        updateProducts(url)
    }, [])


    const updateProductDetails = async (urlWithId) => {
        dispatch({ type: "LOADING_PRODUCT_DETAIL" })
        try {
            const res = await axios.get(urlWithId)
            const result = await res.data
            dispatch({ type: "PRODUCT_DETAILS_DATA", payload: result })
        } catch (error) {
            dispatch({ type: "PRODUCT_DETAILS_ERROR" })
        }
    }


    return (
        <>
            <AppContext.Provider value={{ ...state, updateProductDetails }}>
                <AppContext2.Provider value={{}}>
                    {children}
                </AppContext2.Provider>
            </AppContext.Provider>
        </>
    )
}


// Custom Hook
const useProductContext = () => {
    return useContext(AppContext)
}
const useProductContext2 = () => {
    return useContext(AppContext2)
}

export { AppProvider, useProductContext, useProductContext2 };