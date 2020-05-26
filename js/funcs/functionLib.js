const power = (num, pot) => num  ** pot;

const factorial = num => {
    let x = num;
    while(x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

// Plane geometry

const quadArea = (base, height) => base * height;

const trapezeArea = (base1, base2, height) => (base1 + base2) * height / 2;

const triangArea = (base, height) => (base * height) / 2;

const triangEqArea = side => power(side, 2) * Math.sqrt(3) / 4;

const circleArea = radio => (Math.PI.toFixed(4)) * (radio ** 2)

const circleCoronaArea = (extRad, intRad) => (Math.PI.toFixed(4)) * (extRad ** 2 - intRad ** 2)


module.exports = { power, factorial, quadArea, trapezeArea, triangArea, 
                triangEqArea, circleArea, circleCoronaArea };
