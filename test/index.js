import sCanvas from '../src/';

window.onload = () => {
    const canvas = document.getElementById('canvas');
    const c = new sCanvas(canvas);
    c.ctx.fillRectWithRadius(20, 20, 40, 40, 5);
};
