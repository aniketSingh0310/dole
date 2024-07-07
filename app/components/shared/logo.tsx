import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-row justify-start gap-0 w-fit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="36" viewBox="0 0 130 36" fill="#fff"><path d="M10.0966 3.01546L10.0842 3L0.399719 3L8.66279 13.5806L8.62546 13.6281L0.438675 23.9514L0.399719 24L9.92617 24L18.3997 13.5L10.0966 3.01546Z" fill-opacity="0.15"> <animate attributeName="fill-opacity" values="0.15;1;0.15" dur="2s" repeatCount="indefinite"></animate> </path> <path d="M25.5579 3.01546L25.5461 3L16.3997 3L24.2037 13.5806L24.1685 13.6281L16.4365 23.9514L16.3997 24L25.3969 24L33.3997 13.5L25.5579 3.01546Z" fill-opacity="1"> <animate attributeName="fill-opacity" values="1;0.15;1" dur="2s" repeatCount="indefinite"></animate> </path> </svg>
        <Image src={"https://shipping.liquid-themes.com/wp-content/uploads/2024/02/ocean-explorer-dark.svg"} width={50} height={30} alt=''/>
    </div>
  )
}

export default Logo