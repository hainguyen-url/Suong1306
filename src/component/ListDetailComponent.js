import { Card, CardImg, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap'; 
import { Link } from 'react-router-dom';
import moment from 'moment';
export const ListDetail = ({staffs, props}) =>{
    const Renderimage = (staffs) =>{
        return staffs != null
        ?<div className='row' key={staffs.id}>
            <div className='col l-3 m-4 c-12'>
                <div className='imginfor'>
                    <CardImg width='70%' height='240px' object src={staffs.image} alt=''/>
                </div>
            </div>
            <div className='col l-8 m-7 c-12'>
                <div>
                    <h3>Họ và tên: {staffs.name}</h3>
                    <CardText>Ngày sinh: {moment(staffs.doB).format("DD/MM/YYYY")}</CardText>
                    <CardText>Ngày vào công ty: {moment(staffs.startDate).format("DD/MM/YYYY")}{" "}</CardText>
                    <CardText>Phòng ban: {staffs.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                </div>
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
            <div className='col l-12 c-12 m-12'>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/staff/">{staffs.name}</Link></BreadcrumbItem>
                {/* <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem> */}
            </Breadcrumb>
            </div>
            <div className="grid">
                {Renderimage(staffs)}                  
            </div>
            {/* <div className='col l-9 m-8 c-12'>
                {RenderInfo(staffs)}
            </div> */}
        </div>
    </div>
    :<div></div> 
}