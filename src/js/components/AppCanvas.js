export const CanvasComponent = {
  id: 'canvas',
  title: 'Canvas',
  render: (className = 'container') => {
    return `
    <section class="${className} error">
      <canvas id="canvas" class="${className} width="1024" height="576"></canvas>
    </section>
    `;
  }
};