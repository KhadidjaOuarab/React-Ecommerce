import React from 'react'

function Product({printValue,productName,price}) {

    const handleAlert = () =>{
        printValue(price)
    }
    return (
        <div>
            {/* <form onSubmit={printValue} className='col' > */}
                <p>{productName}</p>
                <p>{price}</p>
                <button  onClick={handleAlert} >Ajouter au panier</button>
            {/* </form> */}

        </div>
    )
}

export default Product
