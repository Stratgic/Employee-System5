import React,{Component} from'react';
import {variables} from './Variables.js' ;

export class Department extends Component{

    constructor(props){
        super(props);
        this.state={
            departments:[],
            modalTitle: "",
            DepartmentName: "",
            DepartmentId:0,

            DepartmentIdFilter:"",
            DepartmentNameFilter:"",
            departmentsWithoutFilter:[]

            }
        }   
    FilterFn(){
        var DepartmentIdFilter=this.state.DepartmentIdFilter;
        var DepartmentNameFilter = this.state.DepartmentNameFilter;
        
        var filterData=this.state.departmentsWithoutFilter,filter(
            function(el){
                return el.DepartmentId.toString(().toLowerCase ().includes(
                    DepartmentIdFilter.toString().trim().toLowerCase()
                    )&&
                    el.DepartmentName.toString().toLowerCase().includes(
                        DepartmentNameFilter.toString().trim().toLowerCase()
                    )
                
                )
            }
        );
        this.setState({department:filteredData});
    }

    changeDepartmentIdFilter =(e)=>{
        this.state.DepartmentIdFilter=e.target.value;
        this.FilterFn();
    }

    sortResult(prop,asc){
        var sortedData-this.state.departmentsWithoutFilter.sort(function(a,b){
            if(asc){
                return(a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return(b[prop]>a[prop])?1:((b[prop]<b[prop])?-1:0);
            }

            });
            this.setState({departments:sortData})
        }
    }

 changeDepartmentNameFilter =(e)=>{
        this.state.DepartmentNameFilter=e.target.value;
        this.FilterFn();
    }
    
refreshList(){
    fetch (variables.API_URL+ 'department')

    .then(response=>response.json())
    .then (data=>{
    this.setState ({departments:data});
});
}
componentDidMount(){
this.refreshList();
 }

 changeDepartmentName = (e)=>{
    this.setState ({DepartmentName:e.target.value});
 }

addClick(){ 
    this.setState({
        modalTitle:"Add Department",
        DepartmentId:0,
        DepartmentName:""
});
}
editClick(dep){ 
    this.setState({
        modalTitle:"Edit Department",
        DepartmentId:dep.DepartmentId,
        DepartmentName:dep.DepartmentName
});
}

createClick (){
    fetch (variable.API_URL+'department',{
        method:'POST',
        headers:{
        'Accept' : 'application/json',  
        'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
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
            fetch (variable.API_URL+'department/'+id,{
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

    render(){
        const {
            departments,
            modalTitle,
            DepartmentId,
            DepartmentName

        }=this.state;

        return(

          


<div>

<button type="button"
className="btn btn-primary m-2 float-end"
data-bs-toggle="model"
data-bs-target="exampleModal"
onclick={()=>this.addClick()}>
Add Department
</button>



    <table className="table table-striped">
    <thead>
    <tr>
         <th>
            <div class="d-flex flex-row">
          
            <input  className="form-control m-2"
            onChange={this.changeDepartmentIdFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>sortResult('DepartmentId',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>sortResult('DepartmentId',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>
            </button>

        DepartmentId
        </div>
         </th>
         <th>
         <div class="d-flex flex-row">
         <input  className="form-control m-2"
            onChange={this.changeDepartmentIdFilter}
            placeholder="Filter"/>
        DepartmentName
        </div>
         </th>
         <th>
        Options
         </th>
</tr>
 </thead>
 <tbody>

{departments.map(dep=>
    <tr key={dep.DepartmentId}>
<td>{ DepartmentId }</td>
<td>{ DepartmentId }</td>
<td>{ DepartmentName }</td>
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
 onclick={()=>this.editClick()}>
/boot  icons for edit 
copy url/ </button> 

            <button type = "button"
            className="btn btn- light mr-1"
            
    onclick={()=>this.deleteClick(dep.DepartmentId)}>
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

<div className="modal-body">
<div className= "input-group mb-3">
 <span className= "input-group-text">DepartmentName </span>
 <input type="text" className ="form-control"
value={DepartmentName}
onChange={this.changeDepartmentName}/>
</div>
</div>

</div>
</div>
</div>

{DepartmentId==0?
<button type="button"
className="btn btn-primary float-start"
onClick={()=>this.createClick()}
>Create</button>
:null}

{DepartmentId!=0?
<button type="button"
className="btn btn-primary float-start"
onClick={()=>this.updateClick()}
>Update</button>
:null}




</div>
        )
    }
}
