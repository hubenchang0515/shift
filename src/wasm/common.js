/**
 * Create the config of interpreter
 * @param args command line args, default
 * @param {string} code the code t orun
 * @param {(string, string, string)=>void} callback callback of STDOUT, STDERR and Mix-Output
 * @param {string} input string data of STDIN, default '' (empty)
 * @param {string[]} args command line args, default ['/tmp/code']
 * @returns the config
 */
function makeConfig(code, callback, input='', args=['/tmp/code']) {
    let stdoutData = [];
    let stderrData = [];
    let mixData = [];
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
                    if (bytes.length === 0) {
                        const lines = new TextDecoder('utf-8').decode(new Uint8Array(stdoutData)).split('\n');
                        const msg = lines.length > 0 ? lines[lines.length - 1] : ""
                        bytes = encoder.encode(window.prompt(msg||"STDIN")??"");
                    }

                    if (i < bytes.length) {
                        const utf8Code = bytes[i];
                        mixData.push(utf8Code)
                        i += 1;
                        return utf8Code
                    } else if (i == bytes.length) {
                        mixData.push(10);
                        i += 1;
                        return null
                    } else {
                        return null
                    }
                }

                function stdout(utf8Code) {
                    stdoutData.push(utf8Code);
                    mixData.push(utf8Code);
                }

                function stderr(utf8Code) {
                    stderrData.push(utf8Code);
                    mixData.push(utf8Code);
                }

                module.FS.init(stdin, stdout, stderr);
            }
        ],

        postRun: [
            () => {
                const decoder = new TextDecoder('utf-8');
                callback(decoder.decode(new Uint8Array(stdoutData)), decoder.decode(new Uint8Array(stderrData)), decoder.decode(new Uint8Array(mixData)));
            }
        ],
    }
}


export default makeConfig;