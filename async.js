function samplePromise() {
    return Promise.resolve("Azzam");
}

async function run () {
    const name = await samplePromise();
    console.info(name);
}

run();