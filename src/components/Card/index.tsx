import React from 'react'
import css from './index.module.css'
/* eslint react/prop-types: 0 */

interface Props {
  colorBak: string,
  flipped: boolean,
  handleClick: (id: number) => void,
  id: number,
  decision: boolean,
  disabled: boolean
}
const CardBody = ({
  colorBak,
  flipped,
  handleClick,
  id,
  decision,
  disabled
}: Props) => {
  const styleClass = [css.card]
  const classCard = `card${flipped ? colorBak : 'Flipped'}`
  styleClass.push(css[classCard])
  const opacityCard = decision ? css.cardDelete : css.cardShow
  styleClass.push(opacityCard)

  return (
    <button
      type="button"
      onClick={() => handleClick(id)}
      disabled={flipped || disabled}
      className={styleClass.join(' ')}
    />
  )
}

export default CardBody
