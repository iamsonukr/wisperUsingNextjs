'use client'
import React from 'react'

const buttonStyles = {
    backgroundColor: 'red',
    color: 'white', 
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    
    hover: {
      opacity: 0.9
    },
    
    active: {
      transform: 'scale(0.98)'
    }
  }

function DeleteUser({id}) {
    const removeUser=async()=>{
        alert(id)
        let data=await fetch('http://localhost:3000/api/'+id,{
            method:"Delete"
        })
        data=await data.json()
        if(data.success){
            alert("Item deleted")
        }
        
    }
  return (
    <div>
        <button style={buttonStyles} onClick={removeUser}>Delete</button>

    </div>
  )
}

export default DeleteUser