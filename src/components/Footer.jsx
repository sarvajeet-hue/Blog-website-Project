import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const { page, handlerOnChange, totalPages } = useContext(AppContext)
  return (
    <div className=' w-full flex justify-center bg-white fixed bottom-0 border shadow-sm py-2'>
      <div className='flex w-11/12 items-center justify-between max-w-[500px] mr-8'>
        <div className='flex gap-4 ml-[70px]'>
          {page > 1 && (<button className='border shadow-sm' onClick={() => handlerOnChange(page - 1)}>Previous</button>)

          }

          {
            page < totalPages && (<button className='border shadow-sm' onClick={() => handlerOnChange(page + 1)}>Next</button>)
          }
        </div>


        <div>{`page ${page} of ${totalPages}`}</div>
      </div>
    </div>
  )
}

export default Footer
