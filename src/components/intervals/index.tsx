import * as React from "react";
import { FC, memo } from "react";
// interface
import { IIntervalsComponent } from "./interface";


const Intervals:FC<IIntervalsComponent> = ({
    interval,
    setInterval
})=>{
    console.log('render intervals!')
    return (
        <div className="input-group mb-3">
            <span className="input-group-text col-3">intervals</span>
            <select className="form-select" value={interval} onChange={(e)=>{
                setInterval(e.target.value)
            }}>
                <option  value="">Choose...</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>
        </div>
    )
}

export default memo(Intervals);