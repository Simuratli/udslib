export  interface MultiSelectDataPropType{
    title:string | number;
    value:string | number
}

export interface MultiSelectPropTypes{
    data:MultiSelectDataPropType[],
    values:MultiSelectDataPropType[];
    onSelect:(item:MultiSelectDataPropType[])=>void,
    layout?:"responsive" | "default",
    className?:string;
    placeholder?:string
}