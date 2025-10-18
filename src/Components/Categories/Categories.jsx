import React, { use } from 'react'
import Title from '../Title.jsx/Title'
import { NavLink } from 'react-router';

const categoriesPromise = fetch("/categories.json")
.then((res) => res.json())

const Categories = () => {
 const LoadCategories = use(categoriesPromise);

  return (
    <div>
      <Title title1={<>All Category</>} />

      <div className='grid grid-cols-1 mt-5 gap-3'>
        {
            LoadCategories.map((i) => (
                <NavLink 
                    key={i.id}
                    className={"btn bg-white border-0 hover:bg-base-200 font-semibold  text-accent"}
                    to={`/category/${i.id}`}
                >
                    {i.name}
                </NavLink>
            ))
        }
      </div>
    </div>
  )
}

export default Categories
