import {URL} from "url";

const bb = new URL("https://bahasabooster.com/intensive-class?utm_source=learn-node");


bb.host = "staging.bahasabooster.com";
const searchParam = bb.searchParams;
searchParam.append("utm_medium", "curl");

console.info(bb.toString());
console.info(bb.protocol);
console.info(bb.host);
console.info(bb.pathname);
console.info(bb.searchParams);