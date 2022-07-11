import { Card, CardImg, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap'; 
import { Link } from 'react-router-dom';

export const ListDetail = ({staffs, props}) =>{
    const Renderimage = (staffs) =>{
        return staffs != null
        ?<div className='row' key={staffs.id}>
            <div className='col l-3 m-4 c-12'>
                <Card>
                    <img Width='50%' object src={staffs.Image} />
                </Card>
            </div>
            <div className='col l-9 m-8 c-12'>
                <Card>
                    <CardTitle>Họ và tên: {staffs.name}</CardTitle>
                    <CardText>Ngày sinh: {staffs.doB}</CardText>
                    <CardText>Ngày vào công ty: {staffs.startDate}</CardText>
                    <CardText>Phòng ban: {staffs.department}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                </Card>
            </div>
        </div>
        :<div></div>;
        
    };
    
    
    // const RenderInfo = (staffs) =>{
    //     return staffs != null
    //     ?<
    //     :<div></div>;
    // };
    return staffs != null 
    ? <div className='grid'>
        <div className="row">
        <Breadcrumb>
                <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/staff/">{staffs.name}</Link></BreadcrumbItem>
                {/* <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem> */}
            </Breadcrumb>
            <div className="row">
                {Renderimage(staffs)}                   
            </div>
            {/* <div className='col l-9 m-8 c-12'>
                {RenderInfo(staffs)}
            </div> */}
        </div>
    </div>
    :<div></div> 
}