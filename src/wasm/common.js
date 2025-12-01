/**
 * Create the config of interpreter
 * @param args command line args, default
 * @param {string} code the code t orun
 * @param {(string)=>void} callback callback of output
 * @param {string} input string data of STDIN, default '' (empty)
 * @param {string[]} args command line args, default ['/tmp/code']
 * @returns the config
 */
function makeConfig(code, callback, input='', args=['/tmp/code']) {
    let outputData = [];
    return {
        arguments: [...args],
        locateFile: (path, scriptDirectory) => {
            if (path.endsWith(".data")) {
                return "https://shift-wasm.pages.dev/wasm/" + path;
            } else {
                return scriptDirectory + path;
            }
        },
        preRun: [
            (module) => {
                module.FS.writeFile(`/tmp/code`, code);
                const encoder = new TextEncoder();
                const bytes = encoder.encode(input);
                let i = 0;

                function stdin() {
                    if (i < bytes.length) {
                        const utf8Code = bytes[i];
                        i += 1;
                        return utf8Code
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