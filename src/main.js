import * as prix from "./lib/@prix.js";

Object.keys(prix).forEach((key) => {
  if (typeof prix[key] === "function") {
    window[key] = prix[key];
  }
});
async function main (){
  const Data = await useCSVToJSON("/data/dados.csv", ";")


const Pages = {
  home:"home",
  documentacao:"documentacao",
  base: "base"
}
const Config = {
  path: location.origin
}

Router({Pages, Data}, Config);

}

main()


