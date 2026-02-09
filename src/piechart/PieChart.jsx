import DepartmentEmp from './Department.jsx'
import Pie from './Employees.jsx'


 
 
  
export default function PieChart() {
  


 
  return <>
  <div className='d-lg-flex  mt-5 text-light text-center justify-content-around'>
    <div>
      <DepartmentEmp  header={'Employees by Department'}/>
    </div>
    <div>
  <Pie/>
    </div>
  </div>
  
  </>
  
}


