import { useState } from 'react'
import './App.css'
import { calcularTiempo } from './logica/calculotiempo'

function App() {
  const [Distancia, setDistancia] = useState("")
  const [Tiempo, setTiempo] = useState(null)
  const [Velocidad, setVelocidad] = useState("")

  const manejarCalculo = () => {
    try {
      const resultado = calcularTiempo(Number(Distancia), Number(Velocidad))
      setTiempo(resultado)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='Container'>
      <h2>Calculadora de Tiempo de llegada</h2>

      <div>
        <label>Distancia (Km)</label>
        <input
          type='number'
          value={Distancia}
          onChange={(e) => setDistancia(e.target.value)}
        />
      </div>

      <div>
        <label>Velocidad (Km/h)</label>
        <input
          type='number'
          value={Velocidad}
          onChange={(e) => setVelocidad(e.target.value)}
        />
      </div>

      <button onClick={manejarCalculo}>
        Calcular tiempo
      </button>

      {Tiempo && (
        <div className="resultado">
          Tiempo estimado de llegada: {Tiempo.horas} horas y {Tiempo.minutos} minutos
        </div>
      )}
    </div>
  )
}

export default App
