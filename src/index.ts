import is_windows from "is-windows";
import process from "process";
import cp from "child_process";

export function KillProcess(pid: number) {
    return new Promise<void>((resolve, reject) => {
        if (is_windows()) {
            cp.exec(
                "taskkill /PID " + pid + " /T /F",
                function (error, stdout, stderr) {
                    // console.log('stdout: ' + stdout);
                    // console.log('stderr: ' + stderr);
                    if (error !== null) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
            return;
        }
        try {
            process.kill(pid);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}
