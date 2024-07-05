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
  // position:'relative',
  textDecoration: 'none',
  marginBotton:'0px',
};


export const fetchWater=async()=>{
    let data=await fetch('http://localhost:3000/api')
    data=await data.json()
    return data.result
}

async function page() {
    let data=await fetchWater()
    data=data.filter((item)=>item.author=='Sonu Kumar')
    // console.log(data)

  return (
    <div style={{paddingLeft:100, paddingRight:100}}>
      {/* <Navbar/> */}
      <h1 id='Heading' style={{textAlign:'center'}}>Your Posts</h1>
      <div className={style.card}>
        {
          data.map((item)=>(
            
            <div className={style.box}>
            <h3 id='title' style={{fontFamily:'Helvatika'}}>{item.title}</h3>
            <h5 id='content'>{item.content}</h5> 
            <p id='author'>{item.author}</p>
            <p id='date'>{item.date}</p>
            <p id='category'>{item.category}</p>
            {/* <h4>{item._id}</h4> */}
              <div className="tools" style={toolsStyles}>
                <button style={editButtonStyles}>
                  <Link href={`/myposts/${item._id}`} style={linkStyles}>
                    Edit
                  </Link>
                </button>
                <DeleteUser id={item._id} />
              </div>
            
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page