import React from "react";
import {Link} from 'react-router-dom';
const bookTerm=(props)=>{
    return(
        <tr>
            <td scope={"col"}>
                {props.term.name}
            </td>
            <td scope={"col"}>
                {props.term.category}
            </td>
            <td scope={"col"}>
                {props.term.author.name}
            </td>
            <td scope={"col"}>
                {props.term.availableCopies}
            </td>
            <td scope={"col"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={()=>props.onDelete(props.term.id)}>Delete</a>
            </td>
            <td scope={"col"}>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
            <td scope={"col"}>
                <a title={"Mark as taken"} className={"btn btn-secondary"} onClick={()=>props.markBook(props.term.id)}>Mark as taken</a>
            </td>
        </tr>
    )
}
export default bookTerm;