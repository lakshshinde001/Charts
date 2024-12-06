import React from 'react'

const DataDescList = ({title, area, value}) => {
  return (
    <div className='flex justify-between w-full'>
        <div className='flex items-center gap-1 '>
            <p className='p-1 border rounded-full h-2 w-2 bg-blue-400'></p>
            <h2>  {title}</h2>
        </div>
        
        <p>{area}</p>
        <p>{value}</p>
    </div>
  )
}

export default DataDescList