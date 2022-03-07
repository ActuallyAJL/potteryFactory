const buyClay = () => {
    let potObject = {};
    return potObject;
}

const makePottery = (obj) => {
    obj.shape = "Bowl";
    return obj;
}

const bisqueFire = (obj) => {
    obj.readyForGlazing = true;
    return obj;
}

const glazePottery = (obj) => {
    if (obj.readyForGlazing) {
        obj.glazing = "Midnight Blue";
    }
    else {
        console.log("Make sure you bisque fire the pottery before you glaze it.");
    }
    return obj;
}

const finalFiring = (obj , temp) => {
    if (temp > 1200) {
        obj.cracked = true;
    }   
    else {
        obj.cracked = false;
    }
    return obj;
}

let myPot = {};
buyClay(myPot);
makePottery(myPot);
bisqueFire(myPot);
glazePottery(myPot);
finalFiring(myPot);
console.log(myPot);