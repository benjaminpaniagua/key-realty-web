import IconsButton from '@/components/ui/common/IconsButton'
import { DEFAULT_ICON_ITEMS } from '@/types/icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between items-center text-sm p-12 font-inter'>
        <p className='text-white/70'>Copyright &copy; {new Date().getFullYear()} Benjamin Paniagua Rojas</p>
         <IconsButton items={DEFAULT_ICON_ITEMS} />
    </div>
  )
}
