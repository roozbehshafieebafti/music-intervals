import * as React from "react";
import { FC, memo } from "react";
// interface
import { ITypesComponents } from "./interface";


const TypesComponent:FC<ITypesComponents> = ({setType, type})=>{
    console.log('render types!')
    return (
        <div className="input-group mb-5">
            <span className="input-group-text col-3">type</span>
            <select className="form-select" value={type} onChange={(e)=>{
                setType(e.target.value)
            }}>
                <option value="">Choose...</option>
                <option value="Minor">minor</option>
                <option value="Major">Major</option>
                <option value="Diminished">diminished</option>
                <option value="Augmented">Augmented</option>
            </select>
        </div>
    )
}

export default memo(TypesComponent);