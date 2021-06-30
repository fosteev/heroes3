import IView from "./IView";

export default interface Strategy {
    renderTerrain(view: IView): void;
    renderObjects(view: IView): void;
    renderUI(view: IView): void;
}