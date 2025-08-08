import { useState } from "react"
import './App.css'


function App() {

  let [team, setTeam] = useState([])
  let [money, setMoney] = useState(100)
  let [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])
const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0) //stack overflow method using reduce
const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0)


function handleAddFighter(fighter){

  if (money < fighter.price){
    return console.log("not enough money")
  }

  const newTeamArray = [...team, fighter]
  setTeam(newTeamArray)

  const removeIndex = zombieFighters.findIndex(zombie => zombie.id === fighter.id)
  const updatedZombieFighters = [...zombieFighters]
  updatedZombieFighters.splice(removeIndex, 1)

  setZombieFighters(updatedZombieFighters)

  setMoney(money - fighter.price)
}

function handleRemoveFighter(fighter){
  const newZombieArray = [...zombieFighters, fighter]
  setZombieFighters(newZombieArray)

  const removeIndex = team.findIndex(team => team.id === fighter.id )
  const updatedTeamArray = [...team]
  updatedTeamArray.splice(removeIndex, 1)

  setTeam(updatedTeamArray)

  setMoney(money + fighter.price)
}


  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Your Team</h2>
      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>
      <ul>
        {team.map((fighter) => {
          return(
            <>
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
          </>
          ) 
        })}
      </ul>

      <h2>Zombie fighters</h2>  
      <ul>
        {zombieFighters.map((zombieFighter) => {
          return(
            <>
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
            <h2>{zombieFighter.name}</h2>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add zombie</button>
          </li>
          </>
          ) 
        })}
      </ul>
    </>
  )

}

export default App