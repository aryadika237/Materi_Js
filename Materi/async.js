function samplePromise() {
    return Promise.resolve("Yosua");
}
async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();