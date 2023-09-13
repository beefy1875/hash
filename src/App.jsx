import { useEffect, useState } from "react"
import AddHasherToHash from "./components/AddHasherToHash.jsx"
import hasherService from "./services/hashers.js"

const App = () => {

  const [hashers, setHashers] = useState([])

  useEffect(() => {
    hasherService
      .getAll()
      .then(initialHashers => {
        setHashers(initialHashers)
      })
  }, [])

  return (
    <div>
      <h1>Guangzhou hash</h1>
      <h3>Hares</h3>
      <ul>
        <li>Hunka</li>
        <li>Laziji</li>
      </ul>
      <AddHasherToHash></AddHasherToHash>
    </div>
  )
}

export default App
