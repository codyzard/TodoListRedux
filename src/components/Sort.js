import React from 'react';

class Sort extends React.Component{
    onClick = (sortBy,sortValue)=>{
        this.props.onSort(sortBy,sortValue);
    }
    render(){
        var {sortBy,sortValue} = this.props;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp 
                    <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={()=> this.onClick('name',1)}>
                            <a 
                                role="button" className={sortBy === "name" && sortValue === 1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
                            </a>
                        </li>
                        <li onClick={()=> this.onClick('name',-1)}>
                            <a 
                                role="button" 
                                className={sortBy === "name" && sortValue === -1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
                            </a>
                        </li>
                        <li role="separator" className="divider">
                        </li>
                        <li onClick={()=> this.onClick('status',1)}>
                            <a 
                                role="button" 
                                className={sortBy === "status" && sortValue === 1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">Active Status</span>
                            </a>
                        </li>
                        <li onClick={()=> this.onClick('status',-1)}>
                            <a 
                                role="button" 
                                className={sortBy === "status" && sortValue === -1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">Active Status</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        
        )
    }
}
export default Sort;