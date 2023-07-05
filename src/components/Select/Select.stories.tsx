import React,{useState} from "react";
import {ComponentMeta,ComponentStory} from '@storybook/react'
import Select from "./Select";


const fakeDataForSelect = [
    {
        title:'Element 1',
        value:'Element 1'
    },
    {
        title:'Element 2',
        value:'Element 2'
    },
    {
        title:'Element 3',
        value:'Element 3'
    },
    {
        title:'Element 4',
        value:'Element 4'
    },
    {
        title:'Element 5',
        value:'Element 5'
    },
    {
        title:'Element 6',
        value:'Element 6'
    },
]

export default {
    title:'Components/Select',
    component:Select,
} as ComponentMeta<typeof Select>


const Template:ComponentStory<typeof Select> = () => {    
    const [localValue, setValue] = useState<string | number>('Element 1');
    const onChangeInput = (inputValue: string | number) => {
        setValue(inputValue);
    }
    return (
        <Select 
           data={fakeDataForSelect}
           value={localValue}
           onSelect={onChangeInput}
           layout="default"
        />
    )
}

export const Default= Template.bind({});
