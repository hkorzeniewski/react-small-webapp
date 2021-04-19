import React from 'react'

const Activity = ({activity}) => {
    return (
        <div className='activity'>
            <h3>
                {activity.text}{' '}
            </h3>
        </div>
    )
}

export default Activity


