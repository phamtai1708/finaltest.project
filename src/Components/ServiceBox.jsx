import { useState, useEffect } from 'react'
import './ServiceBox.css'
function ServiceBox() {
  
  return (
    <>
            <div className='optionService'>
          <div>
          <span className="material-symbols-outlined">package_2</span>
          <p className='os1'>Free shipping</p>
          <p>Free shipping for order above 500.000đ </p>
          </div>
          <div>
          <span className="material-symbols-outlined">paid</span>
          <p className='os1'>Money Guarantee</p>
          <p>Within 30 days for an exchange</p>
          </div>
          <div>
          <span className="material-symbols-outlined">headphones</span>
          <p className='os1'>Online support</p>
          <p>24 hours a day, 7 days a week</p>
          </div>
          <div>
          <span className="material-symbols-outlined">credit_card</span>
          <p className='os1'>Flexible Payment</p>
          <p>Pay with mutiple credit cards</p>
          </div>
      </div>
    </>
  )
}

export default ServiceBox;