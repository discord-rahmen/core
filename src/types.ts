import type {Client} from "discord.js";

export interface DHInstanceClass {
    layer: DHClientClass;
    plugins: object[];
}

interface DHClientClass {
    wrapperClient: Client;
}