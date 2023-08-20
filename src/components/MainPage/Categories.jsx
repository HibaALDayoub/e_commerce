import React from 'react'
import { useSelector } from 'react-redux'

const Categories = ({idCat}) => {
   
    const { gategories } = useSelector((state) => state.items)
    console.log(gategories);
    
    return (
        <>
            <div className='category'>
                {gategories.map((value, index) => {
                    // const idCat= value.category_id
                    const handlclick = (idCat)=>{
                        console.log(idCat)
                    }
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={`http://localhost:8080/Shop/upload/${value.img}`} alt='' />
                            <span onClick={() => handlclick(value.category_id)} >{value.categories_name}</span>
                        </div>
                    )
                })}
                
            </div>
        </>

    )
}
export default Categories