import React from 'react'
import { useCollection } from '../hooks/useCollection'

const Test = () => {

    const {document}=useCollection('cars')
    console.log(document)

  return (
    <div>
        <img src={document && document[0].image} alt='hello'/>
    </div>
  )
}

export default Test