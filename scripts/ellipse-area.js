function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius')
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}

// Rhombus
function calculateRhombusArea(){
    const diagonalRadius = getInputValueById('rhombus-diagonal-radius');
    const sideRadius = getInputValueById('rhombus-side-radius')
    console.log(diagonalRadius, sideRadius);
    const area = 0.5 * diagonalRadius * sideRadius;
    setInnerTextById('rhombus-area', area);
}

