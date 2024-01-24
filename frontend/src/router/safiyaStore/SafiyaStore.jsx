import React from 'react'
import './SafityaStore.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";



function SafiyaStore() {


    const SafiyaData = [

        {
            id: 1,
            title: "Детский фартук",
            image: "https://safiabakery.uz/uploads/products/thumbs/171_1703825310.jpg",
            preice: 75000
        }
    ]

    return (
        <>
            <div className='Safiya__store'>
            <p>Safiya Store</p>
            </div>
            <div>
                chaqirib quyiladi
            </div>


            <div className='Safiya__store__'>
                <p>Safiya Store</p>

            </div>
            <div className='safiyaMap'>
                {SafiyaData.map((item, index) =>

                    <div className='safiyaMap__item' key={index}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.preice}</p>
                        <div className='safiyaMap__item__shop' >
                            <HiOutlineShoppingBag />
                        </div>


                    </div>

                )}
            </div>


        </>

    )
}

export default SafiyaStore
