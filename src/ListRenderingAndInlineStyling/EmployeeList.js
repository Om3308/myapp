import React from 'react'


function EmployeeList() {
    const employee=[
        {empid:1,name:"rahul",designation:"manager"},
        {empid:2,name:"savi",designation:"tester"},
        {empid:3,name:"vivek",designation:"developer"},
        ]
       
 return employee.map((emp,index)=>
 <table>
     <tr>
         {/* <th>Employee Name</th> */}
         <td>
             {
                 (emp.designation==="developer"?emp.name:"")
             }
     </td>
     </tr>
</table>

 )


}    

export default EmployeeList
