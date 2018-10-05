import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import SushiWallet from '../components/SushiWallet'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi
            key={sushi.id}
            sushi={sushi}
            eatSushi={props.eatSushi}
            eatenSushi={props.eatenSushi}
            addMoney={props.addMoney}
          />
        })}
        <MoreButton moreSushis={props.moreSushis} />
        <SushiWallet addToSushiWallet={props.addToSushiWallet} />
      </div>
    </Fragment>
  )
}

export default SushiContainer;
