import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import GroceryList from './components/GroceryList'
//import './App.css'

function App() {
  const listTitle = ["John"]
  const groceries = ["item 1", "item 2", "item 3"]


  return (
    <>
    <header>
    <Header title={listTitle}/>
  
    </header>
    <main>
    <>
    <GroceryList />
    </>
    </main>
    </>
  )
}

export default App
