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


export interface IcoPropTypes{
    name:'home' | 'smile'
}


export default function Icon({name}:IcoPropTypes) {
    switch (name) {
        case 'home':
            return <Home/>
        case 'smile':
            return <Smile/>
        default:
            return <Home/>
    }
  }
  