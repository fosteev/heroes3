import Context from "./viewport/Context";
import Canvas from "./viewport/engines/canvas/Canvas";

class Launcher {
    private el: HTMLElement;

    constructor(el: HTMLElement) {
        this.el = el;
    }

    public run(): void {
        const context = new Context(new Canvas());
        context.setView({
            height: 300,
            width: 300,
            domElement: this.el
        })
    }
}

export default Launcher;