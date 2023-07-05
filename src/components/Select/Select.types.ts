export  interface SelectDataPropType{
    title:string | number;
    value:string | number
}

export interface SelectPropTypes{
    data:SelectDataPropType[],
    value:string | number;
    onSelect:(item:string | number)=>void,
    layout?:"responsive" | "default",
    className?:string;
}