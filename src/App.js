import React from 'react'
import { Article, Brand, CTA ,Navbar} from './components'
import { Footer, Blog,Possibility, Features, WhatGPT3, Header} from './containers'
import './App.css'
export default function() {
  return (
    <div className='App'>
        <div className="gradient__bg">
          <Navbar></Navbar>
          <Header></Header>
        
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}
