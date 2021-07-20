import ILayer from "../../interfaces/ILayer";
import Tail from "./Tail";
import Grass from '../../../assets/Grass_(h).gif';
import Test from '../../../assets/test.jpg';

class TerrainLayer implements ILayer {
    private ctx: CanvasRenderingContext2D;

    private tails: Tail[];

    private height: number;
    private width: number;

    constructor(
        ctx: CanvasRenderingContext2D,
        height: number,
        width: number
    ) {
        this.ctx = ctx;
        this.height = height;
        this.width = width;
        this.tails = [];
    }

    render() {
        const sizeHeight = 64;
        const sizeWidth = 160;

        const countWidth = this.width / sizeWidth;
        const countHeight = this.height / sizeHeight;
        const countTiles = countHeight + countWidth;

        console.log(Grass);

        for (let i = 0; i < countTiles; i++) {
            console.log(this);
            this.tails.push(
                Tail.create(
                    sizeHeight,
                    sizeWidth,
                    this.ctx,
                    sizeHeight * i,
                    sizeWidth * i,
                    Test
                )
            )
        }
    }
}

export default TerrainLayer;