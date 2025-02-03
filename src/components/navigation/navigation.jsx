import React from 'react'
import '../navigation/navigation.css'

export default function () {
  return (
    <div className='nav'>
        <div className='navbox'>
            <h1 className='h1'>Extravaganza</h1>

            <ul className='list'>
                <li className='li'>Budget <br/> Filtering</li>
                <li className='li'>Search <br/> Venues</li>
                <li className='li'>Customer <br/> Support</li>
                <li className='list2'>Notifications</li>
                <li className='list2'>Profile</li>
            </ul>
        </div>
        <hr style={{ border: "1px solid black" }} />
    </div>
  )
}
