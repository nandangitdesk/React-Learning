import React from 'react'

export function Card({imgSrc , userName ,btnText="Visit me" ,btnHandler}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={imgSrc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button onClick={btnHandler} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"> 
          {btnText} &rarr;
        </button>
      </div>
    </div>
  )
}
