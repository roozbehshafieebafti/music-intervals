import * as Tone from 'tone';
import { delay } from '../utils/delay';
import { baseAndInterval } from '../utils/base-and-interval';
import { notes, octavs } from '../configs/piano';


let PlayInterval:any ;
export async function autoStart( piano: Tone.Sampler,interval: string, type: string){
    console.log('interval',interval)
    console.log('type',type)    

    const Notes =  baseAndInterval(interval, type, notes, octavs);    
    piano.triggerAttack(Notes.base)
    await delay(2000)
    piano.triggerAttack(Notes.interval);
    
    PlayInterval = setInterval(async function run(){
        const Notes =  baseAndInterval(interval, type, notes, octavs);    
        piano.triggerAttack(Notes.base)
        await delay(3000)
        piano.triggerAttack(Notes.interval);
        await delay(3000)
    },6000)
}


export function autoStop (piano: Tone.Sampler){
    PlayInterval && clearInterval(PlayInterval);
    piano.releaseAll()
    piano.disconnect()
}