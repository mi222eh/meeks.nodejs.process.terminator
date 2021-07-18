"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillProcess = void 0;
const tslib_1 = require("tslib");
const is_windows_1 = tslib_1.__importDefault(require("is-windows"));
const process_1 = tslib_1.__importDefault(require("process"));
const child_process_1 = tslib_1.__importDefault(require("child_process"));
function KillProcess(pid) {
    return new Promise((resolve, reject) => {
        if (is_windows_1.default()) {
            child_process_1.default.exec("taskkill /PID " + pid + " /T /F", function (error, stdout, stderr) {
                // console.log('stdout: ' + stdout);
                // console.log('stderr: ' + stderr);
                if (error !== null) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
            return;
        }
        try {
            process_1.default.kill(pid);
            resolve();
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.KillProcess = KillProcess;
