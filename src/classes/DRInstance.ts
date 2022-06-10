import type {DHInstanceClass} from "../types";
import type {DHClientClass} from "@discord-rahmen/discord.js-layer/dist/types";

export class DHInstance implements DHInstanceClass {
    layer;
    plugins;

    constructor(layer: DHClientClass, plugins: object[]) {
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

