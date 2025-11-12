import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

console.log(yarg);

(async() => {
    await main();
})();

async function main(){
    const { base, limit, showTable} = yarg;

    ServerApp.run({base, limit, showTable});
}