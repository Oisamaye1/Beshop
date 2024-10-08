import { CircleCheck, Star } from 'lucide-react'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='p-5 flex flex-col gap-y-2 ring-2 ring-gray-100 rounded-2xl'>
        <span className="flex">
            <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
            <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
            <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
            <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
            <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
                
        </span>

        <div className='flex gap-2 items-center'>
            <h3 className='font-bold text-xl'>Sarah M.</h3>
            <span><CircleCheck color="#0b9d01" strokeWidth={3} absoluteStrokeWidth /></span>
        </div>

        <span>
            <p className='text-gray-500'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda quia perferendis dolore iure accusamus corporis vitae, vero quam sint? Obcaecati harum?"</p>
        </span>

    </div>
  )
}

export default ReviewCard