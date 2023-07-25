import React from 'react';

function Test(props) {
    return (  
        <div className="data">

            {/* <h1>this is Test</h1> */}
            {/* <p>Id:-{props.id}</p> */}
            <p>Name:-{props.title}</p>
            <p>Price:-{props.price}</p>
            <p>DiscountPercentage:-{props.discountPercentage}%</p>
            <p>Rating:-{props.rating}</p>
            <p>Stock:-{props.stock}</p>
            <p>Brand:-{props.brand}</p>
            <p>Category:-{props.category}</p>
            <img src={props.thumbnail} alt={props.thumbnail}></img>
            {/* <img src={props.images}></img> */}
            

        </div>
    )
}

export default Test;
