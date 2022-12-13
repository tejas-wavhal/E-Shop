import React from 'react'
import { useFilteredData } from '../context/filterContext'
const FilterSection = () => {
  const { text,
    handleOnFilterInput,
    handleOnSubmit,
    handleOnCategoryChange,
    allProducts2,
    // handleOnCompanySort
  } = useFilteredData()

  let category = ["All", "Mobile", "Laptop", "Computer", "Accessories", "Watch"]

  // GET ARRAY OF COMPANY NAME WITHOUT DUPLICATE/REPEATED COMPANY NAME
  let mapAllProducts = allProducts2.map((e) => {
    return e.company
  })
  let removeDuplicateValues = (data) => {
    return data.filter((value, index) => data.indexOf(value) === index)
  }
  // eslint-disable-next-line 
  let sortCompanyValues = removeDuplicateValues(mapAllProducts)

  // let mapColor = allProducts2.map((e)=>e.colors)
  // console.log(removeDuplicateValues(mapColor))

  return (
    <div className='filter' style={{ padding: '5%' }}>
      <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault() }}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnFilterInput} value={text} />
        <button className="btn btn-outline-primary" type="submit" onClick={handleOnSubmit}>Search</button>
      </form>

      <ul className="list-group mt-5" style={{ width: '95%' }}>
        <h1 style={{ fontSize: '20px' }} className='text-center'>Category</h1>
        {category.map((e, i) => {
          return <li value="mobile" onClick={() => { handleOnCategoryChange(i) }} key={i} className="list-group-item" style={{ cursor: 'pointer' }}>{e} </li>
        })}
        {/* <li value="" onClick={handleOnCategoryChange} className="list-group-item active" aria-current="true">All</li>*/}
      </ul>

      {/* <div className='my-5'>
        <h1 style={{ fontSize: '20px' }} className='text-center'>Company</h1>
        <form action="#">
          <select className="form-select text-center" aria-label="Default select example" style={{ cursor: 'pointer', width: '150px' }} onClick={handleOnCompanySort}>
            <option value='All'>All</option >
            {sortCompanyValues.map((e, i) => {
              return <option key={i} value={e} >{e}</option >
            })}
          </select>
        </form>
      </div> */}

    </div >
  )
}

export default FilterSection