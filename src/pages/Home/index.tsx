// import Head from 'next/head'
import React from 'react';

import { CallToAction } from './components/CallToAction'
import { Faqs } from './components/Faqs'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { PrimaryFeatures } from './components/PrimaryFeatures'
import { Reviews } from './components/Reviews'
import { SecondaryFeatures } from './components/SecondaryFeatures'

// div.head => Head

export default function Home() {
  React.useEffect(()=>{
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
      var hash = window.location.hash;
      window.location.hash = "";
      window.location.hash = hash;
    }
  }, [window.location.hash])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
