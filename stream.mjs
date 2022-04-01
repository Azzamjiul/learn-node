import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Azzam\n");
writer.write("Jihad\n");
writer.write("Ulhaq\n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
    console.info(data.toString());
})