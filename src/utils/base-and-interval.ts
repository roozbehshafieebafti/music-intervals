import { convertToPardeh } from '../utils/convert-to-pardeh';

interface IBaseAndInterval{
    base: string,
    interval: string;
}

export function baseAndInterval(
    interval: string,
    type: string,
    notes: string[],
    octavs: number[]
):IBaseAndInterval{
    const setOctave = Math.floor(Math.random() * octavs.length + octavs[0])
    const baseNote = Math.floor(Math.random() * notes.length);

    console.log('setOctave',setOctave)
    console.log('baseNote',baseNote)
    
    let secondNote= baseNote + convertToPardeh(interval, type);
    console.log('secondNote',secondNote)
    if(secondNote > notes.length-1){
        if(setOctave === octavs[octavs.length-1]){
            return baseAndInterval(interval,type,notes,octavs);
        }
        else{
            const data = {
                base: notes[baseNote]+setOctave,
                interval: notes[secondNote-notes.length]+`${(setOctave+1)}`
            }
            console.log('data 2',data)
            return data;           
        }
    }
    else{        
        const data =  {
            base: notes[baseNote]+setOctave,
            interval: notes[secondNote]+setOctave,
        }
        console.log('data 3',data)
        return data;
    }
}