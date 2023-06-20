import React from 'react'
import './breadcrump.css'

interface BreadcrumpInterface {
    title:React.ReactNode | string,
    href?:string;
}
export interface BreadcrumpPropTypes{
    items:BreadcrumpInterface[];
    separator:string;
}

function Breadcrump({items,separator}:BreadcrumpPropTypes) {
  return (
    <div className='uds__breadcrump'>
        {items.map((bread)=>{
            return <div className='uds__breadcrump__item'>{bread.title}  <span className='uds__breadcrump__separator'>{separator}</span></div>
        })}
    </div>
  )
}

export default Breadcrump