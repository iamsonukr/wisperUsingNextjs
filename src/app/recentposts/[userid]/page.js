"use client"
import '../../../style/recentposts.css'

import React, { useEffect, useState } from 'react'

function Page(props) {
  const id=props.params.userid
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [date,setDate]=useState("")
  const [category,setCategory]=useState("")
  const [content,setContent]=useState("")

  // -------getting user details ----------
  const getDetails=async()=>{
    let details=await fetch('http://localhost:3000/api/'+id)
    details=await details.json();
    details=details.result
    setTitle(details.title)
    setAuthor(details.author)
    setDate(details.date)
    setCategory(details.category)
    setContent(details.content)

  }
  useEffect(()=>{
    getDetails()
  },[])

  // ----------- performing PUT operation ------
  const updateData=async()=>{
    let data=await fetch('http://localhost:3000/api/'+id,{
      method:"PUT",
      body:JSON.stringify({title,author,date,category,content})
    })
    data=await data.json()
    if(data.success){
      alert ("Data Updated successfully")
    }
  }

  return (
    <div>
        <h2 style={{textAlign:'center'}}>Update the data</h2>
        <form onSubmit={updateData}>
          
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}  />
          <br/>
          <input type="text" placeholder='Author' value={author} onChange={e=>setAuthor(e.target.value)}  />
          <input type="text" placeholder='Date' value={date} onChange={e=>setDate(e.target.value)}  />
          <input type="text" placeholder='category' value={category} onChange={e=>setCategory(e.target.value)}  />
          <textarea type="text" placeholder='content' value={content} onChange={e=>setContent(e.target.value)}  />
          <button type='submit'>Add Blog</button>
        </form>

    </div>
  )
}

export default Page