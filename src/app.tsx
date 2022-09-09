import * as Tone from 'tone';
import * as React from "react";
import {useEffect , useState} from "react";
// config
import { urls } from "./configs/piano";
// components
import Intervals from './components/intervals';
import TypesComponent from './components/types';
// methods
import { autoStart, autoStop } from "./_methods/auto-start-stop";
import { manualBase, manualInterval } from './_methods/manual-base-interval';



const App:React.FC = () =>{
    const piano = new Tone.Sampler({
        urls:urls,
        release: 8,
        baseUrl: "./files/", 
    }).toDestination();

    const [loading, setLoading] = useState<boolean>(true);
    const [interval, setInterval] = useState<string>('Two');
    const [type, setType] = useState<string>('Minor');
    const [tab, setTab] = useState<string>('manual');
    
    useEffect(()=>{
        Tone.loaded().then(()=>{
            if(piano.loaded){
                setLoading(false);
            }
        })
    },[])
    return (
        <div className="page container d-flex justify-content-center align-items-center">
            {loading && <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>    
            </div>}
            {!loading && <div className="col-12 col-md-6">
                    <h1 className="text-center mb-5"> play intervals</h1>
                    <div className="mt-5">
                        <Intervals interval={interval} setInterval={setInterval} />
                        <TypesComponent type={type} setType={setType}  />
                        <div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item" onClick={()=>setTab('manual')}>
                                    <a className={`nav-link ${tab==='manual' ? 'active' : ''}`}>manual</a>
                                </li>
                                <li className="nav-item" onClick={()=>setTab('auto')}>
                                    <a className={`nav-link ${tab==='auto' ? 'active' : ''}`} >auto</a>
                                </li>
                            </ul>
                            {tab==='auto' && <div className="d-flex justify-content-center mt-2">
                                <div className="btn-group mt-3 row" style={{width:'80%'}}>
                                    <button 
                                        type="button" 
                                        className="btn btn-success col-6"
                                        onClick={()=>{
                                            autoStart(piano,interval, type)
                                        }}
                                    >
                                        start
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger col-6"
                                        onClick={()=>{
                                            autoStop(piano)
                                        }}
                                    >
                                        finish
                                    </button>
                                </div>
                            </div>}
                            {tab==='manual' && <div className="d-flex justify-content-center mt-2">
                                <div className="btn-group mt-3 row" style={{width:'80%'}}>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary col-6"
                                        onClick={()=>{
                                            manualBase(piano,interval, type) 
                                        }}
                                    >
                                        base note
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-warning col-6"
                                        onClick={()=>{
                                            manualInterval(piano)
                                        }}
                                    >
                                        interval note
                                    </button>
                                </div>
                            </div>}
                            
                        </div>

                    </div>
            </div>}
        </div>
    )
}


export default App;