import React from "react";
import { Card, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";

function Department(props){
    const Departments = props.departments.map((departments) => {
        return (
            <div className="col l-3 m-5 c-12">
                <Card>
                    <h3>{departments.name}</h3>
                    <p>Số lượng nhân viên: {departments.numberOfStaff}</p>
                </Card>
            </div>
        );
    }
);

    return(
        <div className="grid wide">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem> / 
                    <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                </Breadcrumb>              
            </div>
            <div className="row row-content">
                {Departments}
            </div>
        </div>
    );
}
export default Department;