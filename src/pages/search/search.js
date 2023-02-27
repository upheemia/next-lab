import { useEffect, useState, useMemo } from "react"
import getAnimals from "../api/getAnimals"
import styles from '@/styles/Search.module.css'


export default function SearchAnimals() {
  const [animals, setAnimals] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const fetchAnimals = async () => {
    const animals = await getAnimals()
    setAnimals(animals)
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  const filteredAnimals = useMemo(() => {
    return animals.filter(animal => animal.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, animals])

  return (
    <main className={styles.main}>
      <h1>Поиск животных</h1>
      <input className={styles.search} type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <div className={styles.animalsContainer}>
        {filteredAnimals.map((animal, index) => (
          <p key={index}>{animal}</p>
        ))}
      </div>
    </main>
  )
}