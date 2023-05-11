import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options:BuildOptions):ResolveOptions {
    return {
        extensions:['.tsx', '.ts', '.js','.jsx'],
        modules:[options.paths.src, 'node_modules'],
        mainFiles:['index'],
        preferAbsolute:true,
        alias:{}
    }
}