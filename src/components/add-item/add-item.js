import React from "react";

import './add-item.css'

const AddItem = ({addItem}) => {
    return <div>
        <button className='btn btn-dark'
                onClick={() => addItem('hi react-boy')}
                >
            Add item
        </button>
    </div>
}

export default AddItem;
