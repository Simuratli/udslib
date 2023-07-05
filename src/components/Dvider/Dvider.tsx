import React from 'react'
import { DviderPropTypes } from './Dvider.types'
import './Dvider.css'

function Dvider({dashed,type="horizontal",color,text,orientation="center"}:DviderPropTypes) {
  return (
    <div className={`dvider ${dashed && 'dashed'} ${color} ${type} ${orientation}`}>
        <span className='dvider__left'></span>
        {
            type === 'horizontal' &&   <>
            {text && <span className="dvider__text">{text}</span>}
            <span className='dvider__right'></span>
        </> 
        }
    </div>
  )
}

export default Dvider