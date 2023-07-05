import React from 'react'

export function Home() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22V12H15V22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}


export function Smile() {
    return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#383838" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#535252" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 9H9.01" stroke="#535252" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 9H15.01" stroke="#535252" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}

export function Dropdown() {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.50411 4.8376C2.73191 4.6098 3.10126 4.6098 3.32906 4.8376L6.99992 8.50846L10.6708 4.8376C10.8986 4.6098 11.2679 4.6098 11.4957 4.8376C11.7235 5.06541 11.7235 5.43475 11.4957 5.66256L7.4124 9.74589C7.18459 9.9737 6.81524 9.9737 6.58744 9.74589L2.50411 5.66256C2.2763 5.43475 2.2763 5.06541 2.50411 4.8376Z" fill="#6E6F77"/>
    </svg>
}


export function Cancel() {
    return <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
}



export interface IcoPropTypes{
    name:'home' | 'smile' | 'dropdown' | 'cancel'
}


export default function Icon({name}:IcoPropTypes) {
    switch (name) {
        case 'home':
            return <Home/>
        case 'smile':
            return <Smile/>
        case 'dropdown':
            return <Dropdown/>
        case 'cancel':
            return <Cancel/>
        default:
            return <Home/>
    }
  }
  