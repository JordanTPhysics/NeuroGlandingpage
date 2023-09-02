import React from 'react';

function Item(props) {

    
    return (
        <>
            <div className="col-md-6">
                <img className='item' src={props.impath} />
            </div>
            <div className="col-md-6">
                <h2>{props.author}</h2>
                {props.text}
            </div>

        </>
    );
}

export default Item;