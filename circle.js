function circleArea(r) {
    let area = (Math.PI)*r*r;
    console.log(`Circle Area = ${area}`);
};

function circleCircumference(r) {
    let circumference = 2*(Math.PI)*r ; 
    console.log(`Circle Circumference = ${circumference}`);
};

module.exports = { circleArea, circleCircumference };