import React,{useState} from 'react'
import {MultiSelectPropTypes} from './MultiSelect.types';
import './MultiSelect.css'
import { Dropdown,Cancel } from '../Icons/Icons';

function MultiSelect({data, values, onSelect, layout, className,placeholder}:MultiSelectPropTypes) {

    const [open, setOpen] = useState(false)

  return (
    <div className={`multiselect ${layout} ${className}`}>
        <div onClick={(e:React.MouseEvent)=>{setOpen(prev=>!prev);e.stopPropagation()}} className="multiselect__header">
            <div className='multiselect__selected__options'>
                {values.length !==0  ? values.map((item)=>{
                    return <div className='multiselect__badge' key={item.value}>{item.title} <span onClick={(e:React.MouseEvent)=>{onSelect(values.filter((prev=>prev.value !==item.value)));e.stopPropagation()}} className='multiselect__badge__cancel'><Cancel/></span></div>
                }): placeholder ? placeholder : "Please select"}
            </div>
            <Dropdown/>
        </div>
        <div className={`multiselect__content ${open && 'open'}`}>
            {
                data && data.map((item)=>{
                    return <div key={item.value} onClick={()=>{!values.some(exist=>exist.value === item.value) && onSelect([...values,item]);setOpen(false)}} className={`multiselect__content__element ${values.some(exist=>exist.value === item.value) && "selected"}`}>{item.title}</div>
                })
            }
        </div>
    </div>
  )
}

export default MultiSelect