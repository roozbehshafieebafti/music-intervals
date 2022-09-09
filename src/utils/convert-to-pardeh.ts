export const convertToPardeh= (interval:string,type:string):number | undefined=>{
    switch (interval+type) {
        case 'TwoMinor':
                return 1;
        case 'TwoMajor':
                return 2;
        case 'TwoDiminished':
                return 0;
        case 'TwoAugmented':
                return 3;

        case 'ThreeMinor':
                return 3;
        case 'ThreeMajor':
                return 4;
        case 'ThreeDiminished':
                return 2;
        case 'ThreeAugmented':
                return 5;
    
        default:
            break;
    }
}