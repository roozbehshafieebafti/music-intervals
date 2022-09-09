import * as Tone from 'tone';
import { notes, octavs } from "../configs/piano";
import { baseAndInterval, IBaseAndInterval } from "../utils/base-and-interval";

let store: IBaseAndInterval;
export function manualBase(piano: Tone.Sampler, interval: string, type: string){
    if(!store || !store.base){
        store =  baseAndInterval(interval, type, notes, octavs);
    }
    piano.triggerAttack(store.base)
}



export function manualInterval(piano: Tone.Sampler){
    if(store){
        piano.triggerAttack(store.interval);
        delete store.base
    }
}