import React from 'react'
import ReactDOM from 'react-dom/client'
import { CareerRoadmap } from './components/BrokerRoadmap'
import { brokerNodes, links } from './data/broker-roadmap'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><CareerRoadmap careerName="Mortgage Broker" intro="Start with the essentials. Each stop explains what to learn, why it matters, and what to do next." nodes={brokerNodes} links={links} /></React.StrictMode>)
