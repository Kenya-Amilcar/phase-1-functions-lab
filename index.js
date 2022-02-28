function distanceFromHqInBlocks(distanceInBlocks){
    const scruberHeadquaters = 42
    let startingBlock = distanceInBlocks
    let result = startingBlock - scruberHeadquaters
    if (startingBlock < 42) {
        result = scruberHeadquaters - startingBlock;
    }
    
    return result;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distanceInBlocks){
    const oneBlockInFeet = 264
    let result = distanceFromHqInBlocks(distanceInBlocks) * oneBlockInFeet
    return result;

}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start,destination){
    const oneBlockInFeet = 264
    let result = (destination - start) * oneBlockInFeet
    if (destination < start) {
        result = (start - destination) * oneBlockInFeet
    }
    return result
}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(start, destination){
    const oneBlockInFeet = 264
    let result
    let distance = (destination - start) * oneBlockInFeet
    if (destination < start) {
        distance = (start - destination) * oneBlockInFeet
    }

    if (distance <= 400) {
        result = 0;
    }

    else if (400 < distance < 2000) {
        result = (distance - 400) * 0.02;
    }

    if (distance > 2000) {
        result = 25;
    }

    if (distance > 2500) {
        result = "cannot travel that far";
    }

    return result
}
calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58); 
calculatesFarePrice(34,24);