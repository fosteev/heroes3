import IView from "../../interfaces/IView";
import Strategy from "../../interfaces/IStrategy";
import TerrainLayer from "./TerrainLayer";

class Canvas implements Strategy {
    private terrain: HTMLElement;

    private createCanvas(height: number, width: number, id: string): HTMLElement {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', id);
        canvas.setAttribute('width', String(width));
        canvas.setAttribute('height', String(height));
        this.terrain = canvas;
        return canvas;
    }

    public renderTerrain(view: IView): void {
        this.terrain = this.createCanvas(view.height, view.width, 'terrain');
        view.domElement.appendChild(this.terrain);
        const terrainLayer = new TerrainLayer()
    }

    public renderObjects(view: IView) {
    }

    public renderUI(view: IView) {
    }
}

export default Canvas;