function samplePromise() {
    return Promise.resolve("Azzam");
}

const name = await samplePromise();
console.info(name);