import React from 'react'
import ThemeToggleButton from '../ui/theme-toggle-button'

const ThemeChange = () => {
  return (
    <div className='my-20'>
      <div className='w-[57%] mx-auto flex justify-center gap-4'>
        <ThemeToggleButton variant='polygon' />
        <ThemeToggleButton variant='circle'/>
        <ThemeToggleButton variant='circle-blur'/>
        <ThemeToggleButton variant='gif' url='https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzJkeWoxdmdyajE0NmxkdGlvZDJxaWMybnc0NmZuNGF4cnU3Zmt3ZyZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/weQG1zCbffpew/giphy.gif'/>
        <ThemeToggleButton variant='gif' url='https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXZtY2lzeWJscmQxNjlmanNpMjQ1YjV2c2R3aHB0ZXBqM21pazIybiZlcD12MV9zdGlja2Vyc190cmVuZGluZyZjdD1z/Y4hyjItjzTigrqb3FT/giphy.gif'/>
        <ThemeToggleButton variant='gif' url='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHloZDN4YTd3d3dqMmVybzYxZTE5NjMyazEzeDczYnY3bXRtdm1zZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/9DghmANvWa89buaqbn/giphy.gif'/>
      </div>
    </div>
  )
}

export default ThemeChange
