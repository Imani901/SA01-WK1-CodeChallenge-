function speedDetector(speed){
    // const speedLimit = 70;
    // const kmPerDemerit = 5;

    if (speed < 70){
        return "Ok"; 
    } else {
        const points = (speed- 70)/5;
        if (points > 12){
            return "license suspended";
        } else {
            return `points: ${points}`
        }
    }

}

console.log(speedDetector(80));   
console.log(speedDetector(135));
console.log(speedDetector(35));