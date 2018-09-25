/**
 * @desc ctx
 */

export default class Ctx extends CanvasRenderingContext2D {
    public ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        super();
        this.ctx = ctx;
    }

    public fillRectWithRadius(
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
    ): void {
        const min: number = Math.min(width, height);
        const iRadius: number = radius > min / 2 ? min / 2 : radius;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y + height - iRadius);
        this.ctx.arc(
            x + iRadius,
            y + height - iRadius,
            iRadius,
            Math.PI * 0,
            Math.PI * 0.5,
            true,
        );
        this.ctx.lineTo(x + width - iRadius, y + height);
        this.ctx.arc(
            x + width - iRadius,
            y + height - iRadius,
            iRadius,
            Math.PI * 1.5,
            Math.PI * 2,
            true,
        );
        this.ctx.lineTo(x + width, y);
        this.ctx.fill();
    }
}
