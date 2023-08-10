export const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getDistance = (pos: {x: number, y: number}, ref: {x: number, y: number}) => {
    const dist1 = ref.x - pos.x;
    const dist2 = pos.y - ref.y;
    return Math.sqrt(dist1 * dist1 + dist2 * dist2);
  }
  
export const calculatePoints = (distance: number, mapId: string) => {
    if(mapId==='Cyrodiil'){
        if(distance<=20){
            return 100
        }

        if(distance>=100){
            return 0;
        }

        return (-(5/4)*distance + 125)
    }
    else{
        if(distance<=10){
            return 100
        }
        
        if(distance>=50){
            return 0;
        }

        return (-(5/2)*distance + 125)
    }
}