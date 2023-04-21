module.exports = function (cmd) {
    if (cmd === "pwd") {
    console.log(`Current directory: ${process.cwd()}`);
    }
}
