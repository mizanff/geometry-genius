function calculateRectangleArea(){
    // get length of the rectangle 
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get with of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate rectangle area
    const area = length * width;
    console.log('Area of the length', area)

    // display rectangle
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
   
}