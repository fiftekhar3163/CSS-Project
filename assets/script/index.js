// script.js

// Import Shape class from shape.js
import { shape } from './shape.js';

document.addEventListener('DOMContentLoaded', function() {
  const shapeSelect = document.getElementById('shape-select');
  const colorSelect = document.getElementById('color-select');
  const container = document.getElementById('container');
  const createButton = document.getElementById('create-button');
  const shapesArray = [];

  shapeSelect.addEventListener('change', createShapes);
  colorSelect.addEventListener('change', createShapes);
  createButton.addEventListener('click', createShape);

  function createShapes() {
    container.innerHTML = '';
    const shape = shapeSelect.value;
    const color = colorSelect.value;

    shapesArray.forEach(shape => {
      createShapeElement(shape);
    });
  }

  function createShape() {
    const shape = new Shape(shapeSelect.value, colorSelect.value);
    shapesArray.push(shape);
    createShapeElement(shape);
  }

  function createShapeElement(shape) {
    const div = document.createElement('div');
    div.classList.add('shape');
    if (shape.name === 'square') {
      div.classList.add('square');
    }
    div.style.backgroundColor = shape.color;
    div.textContent = shape.name.charAt(0).toUpperCase() + shape.name.slice(1);
    div.addEventListener('click', () => {
      alert(shape.getInfo());
    });
    container.appendChild(div);
  }

  // Initial creation
  createShapes();
});
