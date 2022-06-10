import type {DRInstanceClass} from "../types";
import type {DRClientClass} from "@discord-rahmen/discord.js-layer/dist/types";

export class DRInstance implements DRInstanceClass {
    layer;
    plugins;

    constructor(layer: DRClientClass, plugins: object[]) {
        this.layer = layer;
        this.plugins = plugins;

        for (const plugin of this.plugins) {
            // @ts-ignore
            if (typeof plugin?.init === 'function') {
                // @ts-ignore
                plugin.init(this.layer);
            }
        }
    }
}

