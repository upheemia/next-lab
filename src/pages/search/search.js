import { useEffect, useState, useMemo } from "react"
import getAnimals from "../api/getAnimals"
import styles from '@/styles/Search.module.css'

const SELECT_OPTIONS = {
  Name: 'Имя',
  Species: 'Вид',
  Age: 'Возраст',
}

export default function SearchAnimals() {
  const [animals, setAnimals] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchType, setSearchType] = useState(SELECT_OPTIONS.Name)

  const fetchAnimals = async () => {
    const animals = await getAnimals()
    setAnimals(animals)
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  const filteredAnimals = useMemo(() => {
    switch (searchType) {
      case SELECT_OPTIONS.Name:
        return animals.filter(animal => animal.name.toLowerCase().includes(searchValue.toLowerCase()))
      case SELECT_OPTIONS.Species:
        return animals.filter(animal => animal.species.toLowerCase().includes(searchValue.toLowerCase()))
      case SELECT_OPTIONS.Age:
        return animals.filter(animal => animal.age.toLowerCase().includes(searchValue.toLowerCase()))
    }
  }, [searchValue, animals, searchType])

  return (
    <main className={styles.main}>
      <h1>Поиск животных</h1>
      <div className={styles.searchContainer}>
        <input className={styles.search} type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <select onChange={(e) => setSearchType(e.target.value)}>
          {Object.values(SELECT_OPTIONS).map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
      <div className={styles.animalsContainer}>
        <div>
          <span className={styles.animalInfo}>Имя</span>
          <span className={styles.animalInfo}>Вид</span>
          <span className={styles.animalInfo}>Возраст</span>
        </div>
        {filteredAnimals.map((animal, index) => (
          <div key={index}>
            <span className={styles.animalInfo}>{animal.name}</span>
            <span className={styles.animalInfo}>{animal.species}</span>
            <span className={styles.animalInfo}>{animal.age}</span>
          </div>
        ))}
      </div>
    </main>
  )
}