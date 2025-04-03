import { useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {

  return (
    <>
      <div>
        <Counter title="First Counter" description="This is my first counter"/>
        <Counter title="Second Counter" />
        <Counter title="Third Counter" />

      </div>
    </>
  )
}

export default App
