import React, { useState } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import moment from "moment";
import { Link } from "react-router-dom";


  function StaffList({staffs, onClick }) {
  return (
          <Card>
            <Link to={`/staff/${staffs.id}`}>
              <img Width="100%" src={staffs.image} />
              <div className="title">{staffs.name}</div>
            </Link>
          </Card>
  );
};

export function Staff( props ) {
  const Staffs = props.staffs.map((staffs) =>{
    return (
      <div className="col l-2 m-3 c-6"  key={staffs.id}>
                <StaffList staffs={staffs} />
            </div>
    );
  });
  return(
    <div className="grid wide">
            <div className="row">
                {Staffs}
            </div>
        </div>
  );
  
};
