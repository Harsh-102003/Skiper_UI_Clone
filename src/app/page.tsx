import AiInputCard from '@/components/homeCards/AiInputCard'
import SpecialCard from '@/components/homeCards/SpecialCard'
import TemplateCard from '@/components/homeCards/TemplateCard'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/landing page/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <TemplateCard />
      <SpecialCard/>
      <AiInputCard/>
      <ThemeChange/>
    </div>
  )
}

export default page
