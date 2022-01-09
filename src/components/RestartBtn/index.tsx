import css from './index.module.css'
import React from 'react'

interface Props {
 restartGame: () => void
}

export const RestartBtn: React.FC<Props> = ({
 restartGame,
 children
}) => (
  <button
    type="button"
    className={css.buttonRestart}
    onClick={() => restartGame()}
  >
    {children}
  </button>
)
