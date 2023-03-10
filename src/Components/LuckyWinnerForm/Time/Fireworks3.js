import { Fireworks } from 'fireworks/lib/react'

function Fireworks3() {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }



 

  return (
    <div>
      <Fireworks {...fxProps} />
     
    </div>
  )
}

export default Fireworks3