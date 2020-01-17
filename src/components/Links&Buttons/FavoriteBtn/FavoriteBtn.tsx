import React from 'react';


const FavoriteBtn = ({toggleText, handlerClick}) => (
    <div>
    <button onClick={handlerClick}>{toggleText ? 'Delete Favorite List': 'Add Favorite List'}</button>
    </div>
)

export default FavoriteBtn;