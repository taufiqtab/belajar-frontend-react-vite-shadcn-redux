import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const [count, setCount] = useState(0)
  const [nama, setNama] = useState("")


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNama(event.target.value);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <p>Angka sekarang adalah {count}</p>
        <Button onClick={() => setCount((count) => count - 1)}>-</Button>
        <Button onClick={() => setCount((count) => count + 1)}>+</Button>
        <p>
          Belajar Frontend bersama {nama}
        </p>
      </div>

      <Input placeholder='Nama' onChange={handleNameChange} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
