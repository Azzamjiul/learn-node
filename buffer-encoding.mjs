const buffer = Buffer.from("Azzam Jihad Ulhaq", "utf8");

console.info(buffer.toString("base64"))
console.info(buffer.toString("hex"))

const bufferBase64 = Buffer.from("QXp6YW0gSmloYWQgVWxoYXE=", "base64");

console.info(bufferBase64.toString("base64url"));