import React from 'react'
import {connect} from 'react-redux'
import { createUnit } from '../logic/units.js'

const action = require('../actions/actions.js')

const CastleInfo = (props) => {

  const buyUnitHandler = (event) => {
    props.addUnit({
      unitName: event.target.className.split('_')[1].slice(4),
      holder: props.gameStatus.whoTurn,
    })
  }

  return (
    <div className='castle-info'>
      <button className='castle-info_buy-warrior' onClick={buyUnitHandler}>
        warrior ({createUnit('warrior').cost})
      </button>
      <button className='castle-info_buy-archer' onClick={buyUnitHandler}>
        archer ({createUnit('archer').cost})
      </button>
      <button className='castle-info_buy-swordsman' onClick={buyUnitHandler}>
        swordsman ({createUnit('swordsman').cost})
      </button>
      <button className='castle-info_buy-heavy-infantry' onClick={buyUnitHandler}>
        heavy-infantry ({createUnit('heavy-infantry').cost})
      </button>
      <button className='castle-info_buy-crossbowman' onClick={buyUnitHandler}>
        crossbowman ({createUnit('crossbowman').cost})
      </button>
      <button className='castle-info_buy-catapult' onClick={buyUnitHandler}>
        catapult ({createUnit('catapult').cost})
      </button>
      <button className='castle-info_buy-light-cavalry' onClick={buyUnitHandler}>
        light-cavalry ({createUnit('light-cavalry').cost})
      </button>
      <button className='castle-info_buy-heavy-cavalry' onClick={buyUnitHandler}>
        heavy-cavalry ({createUnit('heavy-cavalry').cost})
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStatus: state,
  }
}

const mapDispatchToProps = {
  addUnit: action.addUnit,
}

export default connect(mapStateToProps, mapDispatchToProps)(CastleInfo)

