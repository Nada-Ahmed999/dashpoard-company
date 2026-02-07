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
    fetch('https://697e45d397386252a26a4f86.mockapi.io/data')
    .then((res)=>res.json()
    )
    .then((res)=>{
      setEmpolyees(res[0].employees);
      setClient(res[0].clients);
      setProjects(res[0].projects)
      setTasks(res[0].tasks)
    }
    ).catch((err)=>console.log(err)
    )

   
  },[])
  
  return <content.Provider value={{employees,client,projects,tasks,project,setProject,setValueTask,valueTask,color,setColor}}>
    {children}
  </content.Provider>
}
