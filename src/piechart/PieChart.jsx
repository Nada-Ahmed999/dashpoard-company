import DepartmentEmp from './Department.jsx'
import Pie from './Employees.jsx'



// let desktopOs=[
//     {
//     label: 'IT',
//     value: 100,
//     color:'#8bc34a',  // لون
//     },
//     {
//     label: 'Marketing',
//     value: 0,
//     color:'#5d7f36',  // لون
//     },
//     {
//     label: 'Customer Support',
//     value: 0,
//     color:'#bbed84',  // لون
//     },
//     {
//     label: 'Network',
//     value: 0,
//     color:'#314915',  // لون
//     },
//     {
//     label: 'Sales',
//     value: 0,
//     color:'#b5ea78',  // لون
//     },
//     {
//     label: 'HR',
//     value: 0,
//     color:'#4caf50',  // لون
//     },
//   ]
 
 
  
export default function PieChart() {
  


 
  return <>
  <div className='d-flex  mt-5 text-light text-center justify-content-around'>
    <div>
      <DepartmentEmp  header={'Employees by Department'}/>
    </div>
    <div>
  <Pie/>
    </div>
  </div>
  
  </>
  
}


