module.exports = function trapRainWater(elevationMap) {
    let max = 0;
    let mountain = [0];

    for(let i = 0; i< elevationMap.length; i++) {
        const element = elevationMap[i];
        if(element > max) {
            while(mountain[mountain.length - 1] < max) mountain.pop();
            mountain.push(element);
            max = element;
        } else {
            while(mountain[mountain.length - 1] < element) mountain.pop();
            mountain.push(element);
        }
    }
    let mountainIndex = 1;
    let waterVol = 0;
    elevationMap.forEach(element => {
        waterVol += Math.max(0, Math.min(mountain[mountainIndex], mountain[mountainIndex - 1]) - element);
        if(element == mountain[mountainIndex]) {
            mountainIndex++;
        }
    });
    return waterVol;
}
