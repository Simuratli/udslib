import React,{useState} from 'react'
import {SelectPropTypes} from './Select.types';
import './Select.css'
import { Dropdown } from '../Icons/Icons';

function Select({data, value, onSelect, layout, className}:SelectPropTypes) {

    const [open, setOpen] = useState(false)

  return (
    <div className={`select ${layout} ${className}`}>
        <div onClick={()=>{setOpen(prev=>!prev)}} className="select__header">{value} <Dropdown/></div>
        <div className={`select__content ${open && 'open'}`}>
            {
                data && data.map((item)=>{
                    return <div key={item.value} onClick={()=>{onSelect(item.value);setOpen(false)}} className={`select__content__element ${item.value === value && 'selected'}`}>{item.title}</div>
                })
            }
        </div>
    </div>
  )
}

export default Select