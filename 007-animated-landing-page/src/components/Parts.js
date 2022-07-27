import React from 'react'

const  Parts = ({className, imageUrl}) => {
    return (
      <div className={className}>
          <img className="part" src={imageUrl} alt="" />
      </div>
    );
}

export default Parts;
