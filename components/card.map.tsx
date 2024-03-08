import React from 'react'
import { Data } from '@/data/data'
import { Type } from '@/type/type'
import Card1 from './card/card.style1'

const cardMap = () => {
  return (
    <div>{Data.map((e:Type, i:number)=>(
        <Card1 key={i} {...e}/>
    ))}</div>
  )
}

export default cardMap