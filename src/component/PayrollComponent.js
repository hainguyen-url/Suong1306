import React from "react";
import { Card, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";

 export function Payroll(props){
    const staffs = props.staffs.map((staffs) =>{
        const { name, id, salaryScale, overTime } = staffs;
        const salaryResult = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
          salaryScale * 3000000 + overTime * 200000
        );
    
        return(
            <div className="col l-3 m-5 c-12">
                <div className="card">
                    <h3>{name}</h3>
                    <p>Mã nhân viên: {id}</p>
                    <p>Hệ số lương: {salaryScale}</p>
                    <p>Số ngày làm thêm: {overTime}</p>
                    <div className='role'>
                        <p>lương: {salaryResult}</p>
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