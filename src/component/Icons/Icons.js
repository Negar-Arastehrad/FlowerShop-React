import React from 'react'
import IconsSelect from '../IconsSelect/IconsSelect'
import './IconsStyle.css';

import Icon1 from '../../images/icon-1.png'
import Icon2 from '../../images/icon-2.png'
import Icon3 from '../../images/icon-3.png'
import Icon4 from '../../images/icon-4.png'

const Icons = () => {
  return (
    <div className="icons">
        <div className="container">
            <IconsSelect Head='Free Delivery' Details='On All Orders' IconImg={Icon1} />
            <IconsSelect Head='10 Days Return' Details='MoneyBack Guarantee ' IconImg={Icon2} />
            <IconsSelect Head='Offers and Gifts' Details='On All Orders' IconImg={Icon3} />
            <IconsSelect Head='Secure Payment' Details='Protected By PayPal' IconImg={Icon4} />
        </div>
    </div>
  )
}

export default Icons