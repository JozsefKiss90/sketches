const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
          let w = 60
          let h = 60
          let gap = 20
          let x = 100 + (w + gap) * i  
          let y = 100 + (h + gap) * j

          context.beginPath()
          context.rect(x, y, w, h)
          context.stroke() 

          if(i > 0 && i < 4) {
              context.beginPath()
              context.rect(x + 9, y + 9, w - 16, h - 16)
              context.stroke()
          }
      }

  }
  };
};

canvasSketch(sketch, settings);
