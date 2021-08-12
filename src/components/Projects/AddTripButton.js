import React from 'react'

const AddTripButton = (props) => {
    return (
        <div>
            <button onClick={props.addTrip}>
                Add a trip
            </button>
        </div>
    )
}

export default AddTripButton