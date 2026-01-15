import React, { useState } from 'react'
import ElementSpiska from './ElementSpiska'

function SpisokDel() {
  const [spisokDel, setSpisokDel] = useState([])
  const [vvedennyiTekst, setVvedennyiTekst] = useState('')

  function obrabotkaIzmeneniya(event) {
    setVvedennyiTekst(event.target.value)
  }

  function dobavlenieZadachi() {
    if (vvedennyiTekst.trim() !== '') {
      setSpisokDel([...spisokDel, vvedennyiTekst])
      setVvedennyiTekst('')
    }
  }

  function udalenieElementa(nomerDlyaUdal) {
    const novyiSpisok = spisokDel.filter((element, nomer) => nomer !== nomerDlyaUdal)
    setSpisokDel(novyiSpisok)
  }

  function otmetitVypolnennym(nomerDlyaOtmetki) {
    const novyiSpisok = spisokDel.map((element, nomer) => {
      if (nomer === nomerDlyaOtmetki) {
        return element + ' (выполнено)'
      }
      return element
    })
    setSpisokDel(novyiSpisok)
  }

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={vvedennyiTekst} 
          onChange={obrabotkaIzmeneniya}
          placeholder="Введите новую задачу"
        />
        <button onClick={dobavlenieZadachi}>Добавить задачу</button>
      </div>
      <div>
        {spisokDel.map((element, nomer) => (
          <ElementSpiska
            key={nomer}
            text={element}
            onDelete={() => udalenieElementa(nomer)}
            onMarkDone={() => otmetitVypolnennym(nomer)}
          />
        ))}
      </div>
    </div>
  )
}

export default SpisokDel
