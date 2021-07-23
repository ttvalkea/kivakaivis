class renderedObject {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number | undefined, y: number| undefined, width: number| undefined, height: number| undefined) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.width = width ?? 1;
        this.height= height ?? 1;
    }
}

export default renderedObject;