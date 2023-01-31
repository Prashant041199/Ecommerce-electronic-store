import React from 'react'
import { useParams } from 'react-router-dom'
import item from '../item.json'
import SingleItemPage from './SingleItemPage/SingleItemPage'

const ItemHolder = () => {

    const { id } = useParams()

    console.log(id);
    return (
        <div>
            {
                item.map((e) => {
                    if (id === e.id) {
                        return <SingleItemPage singleItem={e} key={e.id} />
                    }
                })
            }
        </div>
    )
}

export default ItemHolder