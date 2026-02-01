import React, { createContext, useEffect, useState } from 'react'

export  const content=createContext(0)

 export default function DataApi({children}) {

   let [employees,setEmpolyees]=useState(null)
   let [client,setClient]=useState(null)
   let [projects,setProjects]=useState(null)
   let [tasks,setTasks]=useState(null)
   let [project,setProject]=useState('IT')
    let [valueTask,setValueTask]=useState(null)
    let [color,setColor]=useState(null)


  useEffect(()=>{
    fetch('http://localhost:3001/employees')
    .then((res)=>res.json()
    )
    .then((res)=>setEmpolyees(res)
    ).catch((err)=>console.log(err)
    )

    fetch('http://localhost:3001/clients')
    .then((res)=>res.json()
    )
    .then((res)=>setClient(res)
    ).catch((err)=>console.log(err)
    )

    fetch('http://localhost:3001/projects')
    .then((res)=>res.json()
    )
    .then((res)=>setProjects(res)
    ).catch((err)=>console.log(err)
    )

    fetch('http://localhost:3001/tasks')
    .then((res)=>res.json()
    )
    .then((res)=>setTasks(res)
    ).catch((err)=>console.log(err)
    )
  },[])
  
  return <content.Provider value={{employees,client,projects,tasks,project,setProject,setValueTask,valueTask,color,setColor}}>
    {children}
  </content.Provider>
}
