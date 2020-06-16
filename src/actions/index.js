// ACTION - DESCRIBES WHAT U WANT TO DO; a function that returns an object with a type

export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}