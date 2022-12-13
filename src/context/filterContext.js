import { createContext, useReducer, useEffect, useContext, useState } from "react";
import reducer from '../reducer/filterReducer'
import { useProductContext } from "./contextStore";

const filterContext = createContext()

const initialState = {
    filteredData: [],
    allProducts: [],
    allProducts2: [],
    sortValue: "Highest",
    sortByCompanyValue: "All"
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER", payload: products })
    }, [products])

    // SORT DATA
    const handleOnSort = (event) => {
        const userSortValue = event.target.value
        dispatch({ type: "SET_SORT_VALUE", payload: userSortValue })
        dispatch({ type: "SORTING_FILTER" })
    }
    // useEffect(() => {
    //     // eslint-disable-next-line
    // }, [state.sortValue])

    // FILTER DATA OF SEARCH
    const [text, settext] = useState('')
    const handleOnFilterInput = (event) => {
        let value = event.target.value
        settext(value)
    }

    // SUBMIT BTN OF FILTER SEARCH
    const handleOnSubmit = () => {
        let filt = state.allProducts.filter((e) => {
            return e.name.toLowerCase().includes(text.toLowerCase())
        })
        dispatch({ type: 'SET_FITER', payload: filt })
    }

    // CATEGORY CHANGE FUNC
    let handleOnCategoryChange = (i) => {
        let a;
        if (i === 1) {
            a = "mobile"
        } else if (i === 2) {
            a = "laptop"
        } else if (i === 3) {
            a = "computer"
        } else if (i === 4) {
            a = "accessories"
        } else if (i === 5) {
            a = "watch"
        }
        let filt = state.allProducts.filter((e) => {
            return e.category === a
        })
        dispatch({ type: "SET_CATEGORY", payload: filt })
        if (i === 0) {
            dispatch({ type: "SET_ALL_CATEGORY", payload: state.allProducts })
        }
    }

    // COMPANY SORT
    // let handleOnCompanySort = (event) => {
    //     const userCompanySortValue = event.target.value
    //     dispatch({ type: "SET_COMPANY_SORT_VALUE", payload: userCompanySortValue })
    // }
    // useEffect(() => {
    //     dispatch({ type: "SORTING_COMPANY_FILTER" })
    //     // eslint-disable-next-line
    // }, [state.sortByCompanyValue])


    return (
        <>
            <filterContext.Provider value={{
                ...state,
                handleOnSort,
                handleOnFilterInput,
                text,
                handleOnSubmit,
                handleOnCategoryChange,
                // handleOnCompanySort
            }}>{children}</filterContext.Provider>
        </>
    )
}

// CUSTOM HOOK
export const useFilteredData = () => {
    return useContext(filterContext)
}