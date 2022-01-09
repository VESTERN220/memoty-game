import React, { useEffect, useState } from 'react'
import css from './App.module.css'
import ColorsArr from './components/Colors/ColorsArr'
import CardBody from './components/Card'
import {RestartBtn} from './components/RestartBtn'

interface Card {
  id: number,
  type: string
}

const App = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [restart, setRestart] = useState(false)
  const [flipped, setFlipped] = useState<number[]>([])
  const [decision, setDecision] = useState<number[]>([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(ColorsArr)
  }, [restart])

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const restartGame = () => {
    setRestart(!restart)
    setDecision([])
    resetCards()
  }

  const isMatch = (id: number) => {
    const clickedCard = cards.find((card: Card) => card.id === id)
    const flippedCard = cards.find((card: Card) => flipped[0] === card.id)
    // @ts-ignore
    return flippedCard.type === clickedCard.type
  }

  const handleClick = (id: number) => {
    setDisabled(true)

    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      setFlipped([flipped[0], id])

      setTimeout(() => {
        if (isMatch(id)) {
          setDecision([...decision, flipped[0], id])
          resetCards()
        } else {
          setTimeout(resetCards, 500)
        }
      }, 150)
    }
  }

  return (
    <div className={css.gameField}>
      {
        cards.map((card) => (
          <CardBody
            key={card.id}
            id={card.id}
            flipped={flipped.includes(card.id)}
            handleClick={() => handleClick(card.id)}
            colorBak={card.type}
            decision={decision.includes(card.id)}
            disabled={disabled}
          />
        ))}

        <RestartBtn restartGame={restartGame}>
          RESTART
        </RestartBtn>
    </div>
  )
}

export default App
