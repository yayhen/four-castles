import React from 'react';
import { connect } from 'react-redux';
import EmptyTile  from './emptyTile';

const GameTable = (props) => {
  let fieldRow = [];
  let fieldColumn = [];
  let keyTile = {
    x: 0,
    y: 0,
  }
  for (let i=0; i<props.dimention.y; i++) {
    for (let j=0; j<props.dimention.x; j++) {
      keyTile.x = j;
      keyTile.y = i;
      fieldRow.push(<EmptyTile tileX={j} tileY={i} key={Math.random().toString()} />)
    }
    fieldColumn.push(<tr key={Math.random().toString()}>{fieldRow}</tr>);
    fieldRow = [];
  }

  return (
    <div>
      <table className='game-table'>
        <tbody>
          {fieldColumn}
        </tbody>
      </table>
    </div>
  )
}

export default connect(null, null)(GameTable)