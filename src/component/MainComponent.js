import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { STAFFS } from '../shared/staffs';
import { Staff } from './list';
import { ROLE } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import {Footer} from './FooterComponent';
import {Header} from './HeaderComponent';
import Department from './DepartmentComponent';
import { Payroll } from './PayrollComponent';
import { ListDetail } from './ListDetailComponent';



function Main(props) {
  const [staffs, setstaffs] = useState(STAFFS);
  const [ role, setrole] = useState(ROLE);
  const [ departments, setdepartments] = useState(DEPARTMENTS);
  
  const StaffWithId = ({match}) => {
    return(
      <ListDetail staffs={staffs.filter((staff) => staff.id ===parseInt(match.params.staffId,10))[0]}/>
    );
  }
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route>
            <Route path='/staff' element={<Staff staffs={staffs}/>}/>
            <Route exact path='/staff/:staffId' element={<StaffWithId/>}/>
            <Route exact path='/department' element={<Department departments={departments}/>}/>
            <Route exact path='/payroll' element={<Payroll staffs={staffs}/>}/>
          </Route>
        </Routes>
        {/* <Staff staffs={this.state.staffs}/> */}
        <Footer/>
      </div>
  );
}

export default Main;
