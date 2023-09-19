import React from 'react'
import './paper.css'

const Paper = () => {
  return (
    <div className='notebook'>
        <div className="paper" id={1}>
            <p className='paper-title'>Title Of Paper</p>
            <div className="paper-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit quidem, dicta possimus repudiandae quaerat voluptates, beatae atque aperiam ullam temporibus cupiditate pariatur architecto at reiciendis, praesentium expedita sint sapiente.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Paper