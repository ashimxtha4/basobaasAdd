import React from 'react'

function buy() {
  return (
    <div>
        <div>Mathi ko step haru</div>
        <div>
            Ad Category (icon)
            <div style={{display:"flex"}}>
                <input type="radio" name="type" />Sale
                <input type="radio" name="type" />Rent
                <input type="radio" name="type" />Lease
            </div>
            <div>
                Property Type (icon)
                <div>(icon)Residental</div>
                <div>(icon)Commercial</div>
                <div>(icon)Agriculture</div>
            </div>
        </div>
    </div>
  )
}

export default buy