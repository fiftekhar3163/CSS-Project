document.addEventListener("DOMContentLoaded", function() {
  const shapeSelect = document.getElementById('shapeSelect');
  const colorSelect = document.getElementById('colorSelect');
  const shapeContainer = document.getElementById('shapeContainer');
  const createButton = document.getElementById('createButton');
  const selectedShapeInfo = document.getElementById('selectedShapeInfo'); // New element
  const shapes = [];

  createButton.addEventListener('click', createShape);

  function createShape() {
      const selectedShape = shapeSelect.value;
      const selectedColor = colorSelect.value;

      const shape = new Shape(selectedShape, selectedColor);
      shapes.push(shape);

      const shapeDiv = document.createElement('div');
      shapeDiv.classList.add('shape');
      if (selectedShape === 'square') {
          shapeDiv.classList.add('square');
      }
      shapeDiv.style.backgroundColor = selectedColor;
      shapeDiv.textContent = shapes.length; // Display index for identification
      shapeDiv.addEventListener('click', function() {
        displayShapeInfo(shape);
    });

      shapeContainer.appendChild(shapeDiv);
  }
  function displayShapeInfo(shape) {
    selectedShapeInfo.innerHTML = `Selected Shape: ${shape.name}, Color: ${shape.color}`;
  }

  createButton.addEventListener('click', createShape);
});

