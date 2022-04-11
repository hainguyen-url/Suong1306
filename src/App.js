import './grid.css';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import {STAFFS} from './shared/staffs';
import { Staff } from './component/list';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      staffs: STAFFS,
  };
  }
  render(){
  return (
    <div className="body">
      <div className="App">
        <Navbar dark color='primary'>
          <div className='grid'>
            <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Staff staffs={this.state.staffs}/>
      </div>
    </div>
  );
  }
}

export default App;
