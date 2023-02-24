import React from 'react'
import { ItemProps } from '../share/ListComponent'
interface ValuesComponentProps{
content:string
}
const ValuesComponent:React.FC<ItemProps> = ({item}:ItemProps) => {
  return (
      <div className='flex justify-center items-center p-4 bord rounded-3xl border-black 
      border-2 mb-2 w-fit hover:bg-green-200 '>
          {item}
      </div>
  )
}

export default ValuesComponent