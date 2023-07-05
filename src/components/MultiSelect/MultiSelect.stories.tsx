import React,{useState} from "react";
import {ComponentMeta,ComponentStory} from '@storybook/react'
import MultiSelect from "./MultiSelect";
import {MultiSelectDataPropType} from "./MultiSelect.types";


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
    title:'Components/MultiSelect',
    component:MultiSelect,
} as ComponentMeta<typeof MultiSelect>


const Template:ComponentStory<typeof MultiSelect> = () => {    
    const [localValue, setValue] = useState<MultiSelectDataPropType[]>([]);
    const onChangeInput = (inputValue: MultiSelectDataPropType[]) => {
        setValue(inputValue);
    }
    return (
        <MultiSelect 
           data={fakeDataForSelect}
           values={localValue}
           onSelect={onChangeInput}
           layout="default"
        />
    )
}

export const Default= Template.bind({});
