import React from 'react'
import { AppView } from '@monesign/ui'
import Lorem from '../components/Lorem'

function App() {
  return (
    <AppView title="Title">
      <Lorem repeat={10} />
    </AppView>
  )
}

export default App
