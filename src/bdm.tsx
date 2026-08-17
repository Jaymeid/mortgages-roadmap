import React from 'react'
import ReactDOM from 'react-dom/client'
import { CareerRoadmap } from './components/BrokerRoadmap'
import { bdmLinks, bdmNodes } from './data/bdm-roadmap'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><CareerRoadmap careerName="Mortgage BDM" intro="Build the market knowledge, commercial confidence and broker relationships needed to grow a lending business." nodes={bdmNodes} links={bdmLinks} canvasHeight={1900} verticalScale={0.81} /></React.StrictMode>)
