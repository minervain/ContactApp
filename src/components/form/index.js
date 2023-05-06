import React, { useEffect } from 'react'
import { useState } from 'react'

const initialForms={fullname:'',phone_number:''}
function Form({addContact,contacts}) {
    const [form,setForm]=useState({initialForms}) //Bir input’un içeriği değiştiğinde, bunu state’imize atamak için gerekli fonksiyonu oluşturduk. Daha sonra, input’larımıza “onChange” özelliğini ekleyerek, bu fonksiyonu dahil ediyoruz ve input’tan veri alma işlemini başarılı bir şekilde gerçekleştiriyoruz.

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
const onSubmit=(e)=>{
    e.preventDefault();
        if(form.fullname===''||form.phone_number===''){
            return false;
        }
        addContact([...contacts,form])
    console.log(form)
}

useEffect(()=>{
    setForm(initialForms)
},[contacts])

  return (
    <form onSubmit={onSubmit}>
    <div>
      <div>
        <input name='fullname'placeholder='Full Name' onChange={onChangeInput}
        value={form.fullname}/>
      </div>
      <div><input name='phone_number'placeholder='Phone Name' onChange={onChangeInput} value={form.phone_number}/></div>

      <div><button>Add</button></div>
    </div>
    </form>
  )
}

export default Form
