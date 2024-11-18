import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Loader = () => {
  return (
    <section className='bg-slate-50'>
        <MaxWidthWrapper>
            <div className="grid grid-cols-12 justify-center items-center h-[100vh]  gap-2 ">
            <div className="border col-span-full border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Loader