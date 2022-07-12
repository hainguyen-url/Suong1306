import React from "react";
import { Card, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";

 export function Payroll(props){
    const staffs = props.staffs.map((staffs) =>{
        return(
            <div className="col l-3 m-5 c-12">
                <div className="card">
                    <h3>{staffs.name}</h3>
                    <p>Mã nhân viên: {staffs.id}</p>
                    <p>Hệ số lương: {staffs.salaryScale}</p>
                    <p>Số ngày làm thêm: {staffs.overTime}</p>
                    <div className='role'>
                    {/* <p>Lương: salaryScale * 3000000 + overTime * 200000</p> */}
                    </div>
                </div>
            </div>
        );
    });
    return(
        <div className="grid wide">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>              
            </div>
            <div className="row">
                {staffs}
            </div>
        </div>
    )
}