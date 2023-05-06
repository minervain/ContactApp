import React, { useEffect, useState } from 'react'
import Form from './form'
import List from './list'
import './style.css'

function Contact() {
    const[contacts,setContacts]=useState([])

    useEffect(()=>{
        console.log(contacts)
    },[contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form  addContact={setContacts} contacts={contacts}/>


    </div>
  )
}

export default Contact
