function Plan(props){
    return <>
        <li className="shadow p-2 m-2 col-sm-9" key="{props.idx}" >{props.value}</li>
        <button className="btn btn-danger my-2 col-sm-2 " onClick={()=>{props.handleDelete(props.idx)}}>X</button>
    </>
}

export default Plan;