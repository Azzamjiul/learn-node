import dns from "dns/promises";

const address = await dns.lookup("https://moladin.com");

console.info(address.address);
console.info(address.family);