export const hitBar = (hitPoints = 100, holder = 0) => {
  let bg = ''
  if (holder === 0) {
    bg = 'red'
  }
  if (holder === 1) {
    bg = 'blue'
  }

  return {
    background: bg,
    position: 'relative',
    width: '5px',
    height: `${hitPoints}%`,
    top: `${100-hitPoints}%`,
    left: '0px',
  }
}