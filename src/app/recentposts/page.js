import { NextResponse } from 'next/server'
import React from 'react'
import style from '../../style/card.module.css'
import Link from 'next/link'
import DeleteUser from '../../components/deleteUser'

const editButtonStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color 0.3s',

  // Optional: Style on hover
  ':hover': {
    backgroundColor: '#0056b3',
  },
};

const toolsStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const linkStyles = {
  color: 'inherit',
  textDecoration: 'none',
};


export const fetchWater=async()=>{
    let data=await fetch('http://localhost:3000/api')
    data=await data.json()
    return data.result
}

async function page() {
    const data=await fetchWater()
    // console.log(data)

  return (
    <div style={{paddingLeft:100, paddingRight:100}}>
      {/* <Navbar/> */}
      <h1 id='Heading' style={{textAlign:'center'}}>Recent Posts</h1>
      <div className={style.card}>
        {
          data.map((item)=>(
            <div className={style.box}>
            <h2 id='title'>{item.title}</h2>
            <h4 id='content'>{item.content}</h4> 
            <p id='author'>{item.author}</p>
            <p id='date'>{item.date}</p>
            <p id='category'>{item.category}</p>
            {
                item.author === 'Sonu Kumar' ? (
                  <div className="tools" style={toolsStyles}>
                    <button style={editButtonStyles}>
                      <Link href={`/recentposts/${item._id}`} style={linkStyles}>
                        Edit
                      </Link>
                    </button>
                    <DeleteUser id={item._id} />
                  </div>
                ) : null
              }
            
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page