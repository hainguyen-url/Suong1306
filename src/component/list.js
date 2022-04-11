import React, { useState } from "react";
import { Card, CardText } from "reactstrap";
import moment from "moment";

export const StaffInfo = ({ value: staff, ...props }) => {
  if (!staff) return null;
  return (
    <Card>
      <CardText className="name">{staff.name}</CardText>
      <CardText></CardText>
      <CardText>Ngày sinh: {moment(staff.doB).format("DD/MM/YYYY")}</CardText>
      <CardText>
        Ngày vào phòng ban: {moment(staff.startDate).format("DD/MM/YYYY")}{" "}
      </CardText>
      <CardText>Phòng ban: {staff.department.name} </CardText>
      <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
      <CardText>Số ngày làm thêm: {staff.overTime} </CardText>
    </Card>
  );
};
// comment ở đây để mai sau còn nhớ 
// chức năng của cái này là gì 
export const StaffList = ({ staffs = [], onSelect, ...props }) => {
  return (
    <div className="row content">
      {staffs.map((staff) => (
        <div className="col c-12 m-5 l-3">
          <Card key={staff.id} onClick={() => onSelect(staff)}>
            <div className="title">{staff.name}</div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Staff = (props) => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const onStaffSelect = (staff) => setSelectedStaff(staff);

  console.log(selectedStaff);

  return (
    <div className="grid wide">
      <StaffList staffs={props.staffs} onSelect={onStaffSelect} />

      <div className="row">
        <div className="col c-12 m-5 l-3">
          <StaffInfo value={selectedStaff} />
        </div>
        <div className="comment">
          <p>
            <i>bấm vào tên nhân viên đê xem thông tin...</i>
          </p>
        </div>
      </div>
    </div>
  );
};
