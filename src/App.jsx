import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import EventCard from './Components/EventCard'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500">
      <EventCard />
    </div>
  );
}

export default App;

