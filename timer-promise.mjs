import timers from "timers/promises";

// console.info(`${new Date()}`);
// const val = await timers.setTimeout(5000, "Ini value setelah resolve promise");
// console.info(`${new Date()}`);
// console.info(val);

// for await (const startTime of timers.setInterval(1000, `${new Date()}`)) {
//     console.info(`Start Timer at ${startTime}`)
// }

for await (const startTime of timers.setInterval(1000, `${new Date()}`)) {
    console.info(`Start Timer at ${new Date()}`)
}