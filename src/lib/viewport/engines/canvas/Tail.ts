import ITail from "../../interfaces/ITail";

interface CreateTail {
    height: number,
    width: number,
    ctx: CanvasRenderingContext2D,
    deltaY: number,
    deltaX: number,
    src: string
}

class Tail implements ITail {
    private image: HTMLImageElement;

    constructor(ital: CreateTail) {
        const image = new Image(ital.width, ital.height);
        image.src = ital.src;
        image.onload = function () {
            ital.ctx.drawImage(image, ital.deltaX, ital.deltaY, ital.height, ital.width);
        }
        this.image = image;
    }

    static create(
        height: number,
        width: number,
        ctx: CanvasRenderingContext2D,
        deltaY: number,
        deltaX: number,
        src: string
    ): Tail {
        return new Tail({
            height,
            width,
            ctx,
            deltaY,
            deltaX,
            src
        });
    }
}

export default Tail;