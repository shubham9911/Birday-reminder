import React from 'react'
import './List.css';

function List({props}) {
    return (
        <div className='list'>
            {props.map((person) => {
                const {id, name, age, image} = person;
                return <article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>

            })}
        </div>
    )
}

export default List
