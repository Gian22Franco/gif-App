import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { AddHeader } from './components/AddHeader';



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>



            <AddHeader/>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <AddCategory setCategories={ setCategories } />
         

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>


        

        </>
    )
}
