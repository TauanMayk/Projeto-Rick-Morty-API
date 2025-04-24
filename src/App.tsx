import './reset.css'
import './global.css'
import './responsive.css'
import { useState } from 'react'
import { Personagens } from './components/Personagens/Personagens'
import { Cidades } from './components/cidades/cidades'
import { Select } from './components/select/select'
import { Themetoggler } from './components/ThemeToggler/ThemeToggler'
import { InputSearch } from './components/inputs/inputs'

function App() {
  const [busca, setBusca] = useState("");
  const [especie, setEspecie] = useState("");

  return (
    <>
      <Themetoggler />
      <Select setEspecie={setEspecie}/>
      <InputSearch busca={busca} setBusca={setBusca}/>
      <Personagens busca={busca} especie={especie}/>
      <Cidades/>
    </>
  )
}

export default App