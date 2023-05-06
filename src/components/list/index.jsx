import React, { useState } from 'react'

function List({contacts}) {
    const [filterText,setFilterText]=useState('')

    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
    });
  return (
    <div>
        <div>
            <input placeholder='FilterContact' value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
        </div>
        <ul className='list'>
            {
                filtered.map((contact,i) =>(

                    <li key={i}>
                       <span>{'Ad soyad:'+contact.fullname}</span>
                       <span>{'Telno:'+contact.phone_number}</span>

                    </li>
                ))
            }
        </ul>
        <p>Total Contacts :{filtered.length}</p>
    </div>
  )
}

export default List