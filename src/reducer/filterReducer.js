const filterReducer = (state, action) => {
    if (action.type === "LOAD_FILTER") {
        let newSortData;
        let tempSortData = action.payload
        if (state.sortValue === "Highest") {
            let compare = (a, b) => {
                return b.price - a.price
            }
            newSortData = tempSortData.sort(compare)
        }
        return {
            ...state,
            filteredData: newSortData,
            allProducts: action.payload,
            allProducts2: [...action.payload]
        }
    }

    if (action.type === "SET_SORT_VALUE") {
        return {
            ...state,
            sortValue: action.payload
        }
    }
    if (action.type === "SORTING_FILTER") {
        let newSortData;
        let tempSortData = [...state.filteredData]
        if (state.sortValue === "A-Z") {
            newSortData = tempSortData.sort((a, b) => a.name.localeCompare(b.name))
        }
        if (state.sortValue === "Z-A") {
            newSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name))
        }
        if (state.sortValue === "Lowest") {
            let compare = (a, b) => {
                return a.price - b.price
            }
            newSortData = tempSortData.sort(compare)
        }
        if (state.sortValue === "Highest") {
            let compare = (a, b) => {
                return b.price - a.price
            }
            newSortData = tempSortData.sort(compare)
        }
        if (state.sortValue === "handleOnFilterInput") {
            let compare = (a, b) => {
                return b.price - a.price
            }
            newSortData = tempSortData.sort(compare)
        }
        return {
            ...state,
            filteredData: newSortData
        }
    }
    if (action.type === "SET_FITER") {
        return {
            ...state,
            filteredData: action.payload
        }
    }
    if (action.type === "SET_CATEGORY") {
        return {
            ...state,
            filteredData: [...action.payload]
        }
    }
    if (action.type === "SET_ALL_CATEGORY") {
        return {
            ...state,
            filteredData: [...action.payload]
        }
    }
    // if (action.type === "SET_COMPANY_SORT_VALUE") {
    //     return {
    //         ...state,
    //         sortByCompanyValue: action.payload
    //     }
    // }
    // if (action.type === "SORTING_COMPANY_FILTER") {
    //     let newSortData;
    //     let tempSortData = [...state.filteredData]
    //     newSortData = tempSortData.filter((e) => e.company === state.sortByCompanyValue)
    //     if (state.sortByCompanyValue === "All") {
    //         return {
    //             ...state,
    //             filteredData: state.allProducts
    //         }
    //     }


    //     return {
    //         ...state,
    //         filteredData: [...newSortData]
    //     }
    // }
}

export default filterReducer