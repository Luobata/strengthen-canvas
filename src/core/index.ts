/**
 * @desc entry
 */

import Ctx from '@/core/ctx';

export default class Canvas {
    public canvas: HTMLCanvasElement;
    public ctx: Ctx;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = new Ctx(this.canvas.getContext('2d'));
    }
}
