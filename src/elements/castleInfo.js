import React from 'react'
import {connect} from 'react-redux'
import { createUnit } from '../logic/units.js'

const action = require('../actions/actions.js')

const CastleInfo = (props) => {

  const buyUnitHandler = (event) => {
    props.addUnit({
      unitName: event.target.className.split('__')[1].slice(4),
      holder: props.gameStatus.whoTurn,
    })
  }
  if (props.gameStatus.showCastle) {
    return (
      <div className='castle-info'>
        <table>
          <tr>
            <th>Name</th>
            <th>AP</th>
            <th>AR</th>
            <th>DP</th>
            <th>Act</th>
            <th>Cost</th>
            <th></th>
          </tr>
          <tr>
            <td>Warrior</td>
            <td>{createUnit('warrior').attackPower}</td>
            <td>{createUnit('warrior').attackRange}</td>
            <td>{createUnit('warrior').defence}</td>
            <td>{createUnit('warrior').actions}</td>
            <td>{createUnit('warrior').cost}</td>
            <td>
              <button className='castle-info__buy-warrior' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Archer</td>
            <td>{createUnit('archer').attackPower}</td>
            <td>{createUnit('archer').attackRange}</td>
            <td>{createUnit('archer').defence}</td>
            <td>{createUnit('archer').actions}</td>
            <td>{createUnit('archer').cost}</td>
            <td>
              <button className='castle-info__buy-archer' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Swordsman</td>
            <td>{createUnit('swordsman').attackPower}</td>
            <td>{createUnit('swordsman').attackRange}</td>
            <td>{createUnit('swordsman').defence}</td>
            <td>{createUnit('swordsman').actions}</td>
            <td>{createUnit('swordsman').cost}</td>
            <td>
              <button className='castle-info__buy-swordsman' onClick={buyUnitHandler}>
                byu
              </button>
            </td>
          </tr>
          <tr>
            <td>Heavy infantry</td>
            <td>{createUnit('heavy-infantry').attackPower}</td>
            <td>{createUnit('heavy-infantry').attackRange}</td>
            <td>{createUnit('heavy-infantry').defence}</td>
            <td>{createUnit('heavy-infantry').actions}</td>
            <td>{createUnit('heavy-infantry').cost}</td>
            <td>
              <button className='castle-info__buy-heavy-infantry' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Crossbowman</td>
            <td>{createUnit('crossbowman').attackPower}</td>
            <td>{createUnit('crossbowman').attackRange}</td>
            <td>{createUnit('crossbowman').defence}</td>
            <td>{createUnit('crossbowman').actions}</td>
            <td>{createUnit('crossbowman').cost}</td>
            <td>
              <button className='castle-info__buy-crossbowman' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Catapult</td>
            <td>{createUnit('catapult').attackPower}</td>
            <td>{createUnit('catapult').attackRange}</td>
            <td>{createUnit('catapult').defence}</td>
            <td>{createUnit('catapult').actions}</td>
            <td>{createUnit('catapult').cost}</td>
            <td>
              <button className='castle-info__buy-catapult' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Light cavalry</td>
            <td>{createUnit('light-cavalry').attackPower}</td>
            <td>{createUnit('light-cavalry').attackRange}</td>
            <td>{createUnit('light-cavalry').defence}</td>
            <td>{createUnit('light-cavalry').actions}</td>
            <td>{createUnit('light-cavalry').cost}</td>
            <td>
              <button className='castle-info__buy-light-cavalry' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
          <tr>
            <td>Heavy cavalry</td>
            <td>{createUnit('heavy-cavalry').attackPower}</td>
            <td>{createUnit('heavy-cavalry').attackRange}</td>
            <td>{createUnit('heavy-cavalry').defence}</td>
            <td>{createUnit('heavy-cavalry').actions}</td>
            <td>{createUnit('heavy-cavalry').cost}</td>
            <td>
              <button className='castle-info__buy-heavy-cavalry' onClick={buyUnitHandler}>
                buy
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
  return (
    <div>

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

