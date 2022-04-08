import React from "react";
const categories=(props)=>{
    return(
        <div>
            <div>
                <div>
                    <ul>
                        {props.categories.map((term)=>{
                            return(
                                <li>
                                    {term}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default categories;