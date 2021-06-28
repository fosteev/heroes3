class Launcher {

    private el;

    constructor(el: HTMLElement) {
        this.el = el;
    }

    public run(): void {
        this.el.innerHTML = 'launcher run';
    }
}

export default Launcher;