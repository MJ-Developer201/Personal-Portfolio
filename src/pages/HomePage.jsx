import React from 'react'
import HeroSection from '../components/HeroSection'
import SecondSection from '../components/SecondSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/About'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import FeatureProject from '../components/FeatureProject'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <FeatureProject />
      <SecondSection />
      <About />
      {/* <SocialLinks /> */}
      <Footer />
    </>
  )
}
