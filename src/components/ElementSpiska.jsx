import React from 'react'

function ElementSpiska(props) {
  return (
    <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
      <span>{props.text}</span>
      <button onClick={props.onMarkDone} style={{ marginLeft: '10px' }}>
        Отметить выполненным
      </button>
      <button onClick={props.onDelete} style={{ marginLeft: '10px' }}>
        Удалить
      </button>
    </div>
  )
}

export default ElementSpiska
