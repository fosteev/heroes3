import Strategy from "./interfaces/IStrategy";
import IView from "./interfaces/IView";

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setView(view: IView): void {
        this.strategy.renderTerrain(view);
        this.strategy.renderObjects(view);
        this.strategy.renderUI(view);
    }
}

export default Context;