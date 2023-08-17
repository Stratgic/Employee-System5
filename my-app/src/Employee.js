import React,{Component} from'react';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={
            departments:[],
            employees:[],
            modalTitle: "",
            EmployeeId:0,
            EmployeeName:"",
            DepartmentId:"",
            DateOfJoining:"",
            PhotoFileName:"anonymous.png",
            PhotoPath:variables.PHOTO_URL
        }
    }   

refreshList(){
    fetch (variables.API_URL+ 'department')

    .then(response=>response.json())
    .then (data=>{
    this.setState ({employee:data});
});

    fetch (variables.API_URL+ 'department')

    .then(response=>response.json())
    .then (data=>{
    this.setState ({departments:data});
});
}
componentDidMount(){
this.refreshList();
 }

changeEmployeeName = (e)=>{
    this.setState ({EmployeeName:e.target.value});
}
changeDepartment = (e)=>{
    this.setState ({Department:e.target.value});
}

changeDateOfJoining = (e)=>{
    this.setState ({DateOfJoining:e.target.value});
}
addClick(){ 
    this.setState({
        modalTitle:"Add Employee",
        EmployeeId:0,
        EmployeeName:"",
        Department:"",
        DateOfJoining:"",
        PhotoFileName:"anonymous.png"
});
}
editClick(){ 
    this.setState({
        modalTitle:"edit Employee",
        EmployeeId:emp.EmployeeId,
        EmployeeName:emp.EmployeeName,
        Department:emp.Department,
        DateOfJoining:emp.DateOfJoining,
        PhotoFileName: emp.PhotoFileName
});
}


createClick (){
    fetch (variable.API_URL+'employee',{
        method:'POST',
        headers:{
        'Accept' : 'application/json',  
        'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            EmployeeName:this.state.EmployeeName,
            Department:emp.state.Department,
            DateOfJoining:emp.state.DateOfJoining,
            PhotoFileName: emp.state.PhotoFileName
        })
    })
    
        .then(res=>res.json())
        .then((result)=>{
        alert(result);
        this.refreshList();
        },(error)=>{
    alert('Failed');
    })
    }

    UpdateClick (){
        fetch (variable.API_URL+'employee',{
            method:'PUT',
            headers:{
            'Accept' : 'application/json',  
            'Content-Type': 'application/json' 
            },
            body:JSON.stringify({
                EmployeeName:this.state.EmployeeName,
                Department:emp.state.Department,
                DateOfJoining:emp.state.DateOfJoining,
                PhotoFileName: emp.state.PhotoFileName
            })
        })
        
            .then(res=>res.json())
            .then((result)=>{
            alert(result);
            this.refreshList();
            },(error)=>{
        alert('Failed');
        })
        }

UpdateClick (){
        fetch (variable.API_URL+'department',{
            method:'PUT',
            headers:{
            'Accept' : 'application/json',  
            'Content-Type': 'application/json' 
            },
            body:JSON.stringify({
                DepartmentId:this.state.DepartmentId,
                DepartmentName:this.state.DepartmentName
            })
        })
        
            .then(res=>res.json())
            .then((result)=>{
            alert(result);
            this.refreshList();
            },(error)=>{
        alert('Failed');
        })
        }

        deleteClick (id){
            if(window.confirm('Are you sure?')){
            fetch (variable.API_URL+'employee/'+id,{
                method:'DELETE',
                headers:{
                'Accept' : 'application/json',  
                'Content-Type': 'application/json' 
                }
            })
            
                .then(res=>res.json())
                .then((result)=>{
                alert(result);
                this.refreshList();
                },(error)=>{
            alert('Failed');
            })
        }
            }
imageUpload=(e)=>{
    e.preventefault();

    const formDat=new FormData(;
        formDat.append("file",r.target.file[0],e,target.files[0].name);

        fetch(varibles.API_URL+'employee/savefile',{
            method:'POST',
            body:formData
        })
        .then (res=>res.json())
        .then(data=>{
            this.setState({PhotoFileName:dta});
        })
}
    render(){
        const {
            departments,
            employee,
            modalTitle,
            EmployeeId,
            EmployeeName,
            Department,
            DateOfJoining,
            PhotoPath,
            PhotoFileName


        }=this.state;

        return(

          


<div>

<button type="button"
className="btn btn-primary m-2 float-end"
data-bs-toggle="model"
data-bs-target="exampleModal"
onclick={()=>this.addClick()}>
Add Employee
</button>



    <table className="table table-striped">
    <thead>
    <tr>
        <th>
        EmployeeId
        </th>
        <th>
        EmployeeName
        </th>
        <th>
        Department
        </th>
    <th>
        DOJ
        </th>
        <th>
        Options
        </th>
</tr>
 </thead>
 <tbody>

{employees.map(emp=>
    <tr key={emp.EmployeeId}>
<td>{ emp.EmployeeId }</td>
<td>{ emp.EmployeeName }</td>
<td>{ emp.Department }</td>
<td>{ emp.DateOfJoining }</td>
<td>
<button type = "button"
className="btn btn- light mr-1">
    
/boot  icons for edit 
copy url </button> </td>
<td>
<button type = "button"
 className="btn btn- light mr-1"
 data-bs-toggle="model"
 data-bs-target="#exampleModal"
 onclick={()=>this.editClick(emp)}>
/boot  icons for edit 
copy url/ </button> 

            <button type = "button"
            className="btn btn- light mr-1"
            
    onclick={()=>this.deleteClick(emp.EmployeeId)}>
/boot  icons for edit 
copy url/ </button> 

</td>

</tr>
)}
</tbody>
</table>

<div className="modal fade" id="exampleModal" taIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className ="modal-content">
<div className ="modal-header">
     <h5 className="modal-title"></h5>
<button type="button" className= "btn-close" data-bs-dismiss="model" aria-label="Close"
></button>
</div>

<div className="p-2 w-50 bd-highlight">
<img width="250px" height="250px"
src={PhotoPath+PhotoFileName}/>
<iput classnName="m-2" type="file" onchange={this.Upload}/>
</div>

<div className="modal-body">
    <div className="d-flex flex-row bd-highlighting mb-3"></div>
    <div className="p-2 w-50 bd-highlight">

<div className= "input-group mb-3">
 <span className= "input-group-text">Emp Name </span>
 <input type="text" className ="form-control"
value={EmployeeName}
onChange={this.changeEmployeeName}/>
</div>

<div className= "input-group mb-3">
 <span className= "input-group-text">Department </span>
<select className="form-select"
onChange={this.changeDepartment} 
value={Department}>
    {departments.map(dep=><option key={dep.DepartmentId}>
    {dep.DepartmentName}
    </option>)}

</select>
</div>

<div className= "input-group mb-3">
 <span className= "input-group-text">DOJ </span>
 <input type="text" className ="form-control"
value={EmployeeName}
onChange={this.changeDateOfJoining}/>
</div>

<div className= "input-group mb-3">
 <span className= "input-group-text">Emp Name </span>
 <input type="text" className ="form-control"
value={EmployeeName}
onChange={this.changeEmployeeName}/>
</div>

</div>
</div>

</div>
</div>
</div>

{EmployeeId==0?
<button type="button"
className="btn btn-primary float-start"
onClick={()=>this.createClick()}
>Create</button>
:null}

{EmployeeId!=0?
<button type="button"
className="btn btn-primary float-start"
onClick={()=>this.updateClick()}
>Update</button>
:null}




</div>
        )
    }
}
