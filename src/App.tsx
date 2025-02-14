// import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
// import { Input } from './components/ui/input'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { decrement, increment } from './features/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();


  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setNama(event.target.value);
  // }

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <p>Angka sekarang adalah {count}</p>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <p>
          Belajar Frontend bersama
        </p>
      </div>

      {/* <Input placeholder='Nama' onChange={handleNameChange} /> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
