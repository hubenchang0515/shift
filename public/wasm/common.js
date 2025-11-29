/**
 * Create the config of interpreter
 * @param args command line args, default
 * @param {string} code the code t orun
 * @param {(string)=>void} callback callback of output
 * @param {string[]} args command line args, default ['/tmp/code']
 * @param {string} input string data of STDIN, default '' (empty)
 * @returns the config
 */
function makeConfig(code, callback, args=['/tmp/code'], input='') {
    let outputData = [];
    return {
        arguments: [...args],
        preRun: [
            (module) => {
                module.FS.writeFile(`/tmp/code`, code);
                const encoder = new TextEncoder();
                const bytes = encoder.encode(input);
                let i = 0;

                function stdin() {
                    if (i < bytes.length) {
                        const utf8Code = bytes[i];
                        outputData.push(utf8Code)
                        i += 1;
                        return utf8Code
                    } else if (i == bytes.length) {
                        outputData.push(10);
                        i += 1;
                        return null
                    } else {
                        return null
                    }
                }

                function stdout(utf8Code) {
                    outputData.push(utf8Code);
                }

                function stderr(utf8Code) {
                    outputData.push(utf8Code);
                }

                module.FS.init(stdin, stdout, stderr);
            }
        ],

        postRun: [
            () => {
                callback(new TextDecoder('utf-8').decode(new Uint8Array(outputData)));
            }
        ],
    }
}


export default makeConfig;