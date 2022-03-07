function samplePromise() {
    return Promise.resolve("Fajar");
}

const name = await samplePromise();
console.info(name);