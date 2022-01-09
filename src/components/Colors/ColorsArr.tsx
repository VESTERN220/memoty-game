interface Card {
  id: number,
  type: string
}

const ColorRandomArray = () => {
  let id = 0
  const colors = [
    'Red',
    'Black',
    'Darkorange',
    'Blue',
    'Gold',
    'Green',
    'Magenta',
    'Lime'
  ]

    const resultColorsArr: Card[] = colors.reduce((acc: Card[], type:string ) => {
      acc.push({
        id: id += 1,
        type
      })

      acc.push({
        id: id += 1,
        type
      })

      return acc
    }, [])

    const shuffle = (arr: Card[]) => {
      let j
      let temp

      for (let i = arr.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[j]
        // eslint-disable-next-line no-param-reassign
        arr[j] = arr[i]
        // eslint-disable-next-line no-param-reassign
        arr[i] = temp
      }
      return arr
    }

    return shuffle(resultColorsArr)
}

export default ColorRandomArray
