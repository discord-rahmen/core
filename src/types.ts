import type {Client} from "discord.js";

export interface DRInstanceClass {
    layer: DRClientClass;
    plugins: object[];
}

interface DRClientClass {
    wrapperClient: Client;
}