export const severityData = (noiseLevel) => {
    if(noiseLevel < 71 ){
        return {
            severityNo: 1,
            severityColour: '#1AB518',
            severityName: 'Normal'
        }
    } else if(noiseLevel > 69 && noiseLevel < 111 ){
        return {
            severityNo: 2,
            severityColour: '#FFE400',
            severityName: 'Warning'
        }
    } else if(noiseLevel > 110 ){
        return {
            severityNo: 3,
            severityColour: '#FF0000',
            severityName: 'Dangerous'
        }
    }
};