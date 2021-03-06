import { environments } from "../../../environments/environments";
import { Scene } from "../../../../core/components/scene/scene";
import { ButtonControl } from "../models/button/button.control";
import { ButtonModel } from "../models/button/button.model";

export class MenuScene extends Scene {
    public start: boolean;
    public button: ButtonModel;

    constructor(options: any) {
        super(options);
    }

    public update(): void {
        super.update();
        if (this.button.start) {
            this.setActiveScene('main');
            return;
        }
    }

    public init(): void {
        this.button = new ButtonModel({
            control: new ButtonControl(),
            position: { x: environments.WIDTH / 2 - 150, y: environments.HEIGHT / 2 - 50 },
            size: { width: 300, height: 100 },
            name: 'button',
            text: 'Начать игру',
            color: '#ccc'
        });
        this.appendSceneObjectToLayer(this.button);
        this.start = false;
    }
}
