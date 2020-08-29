import React from "react";
const ResultBox = ({ textResult }) => {
  return (
    <div
      className="mt-6 h-auto text-left rounded-lg px-3 py-2 overflow-y-scroll border-indigo-400 border-2 md:w-full"
      style={{ maxHeight: "22rem" }}
    >
      {textResult ? (
        <p className="text-sm text-indigo-600">{textResult}</p>
      ) : (
        <p className="py-5 text-sm text-indigo-500 text-center">
          Your text will appear here, hopefully.
        </p>
      )}
      {/* <p className="text-sm text-indigo-600">
        It's "scripts" field of package.json. For example: We can run a script
        with npm run command. On the other hand, this run-p command runs
        multiple scripts in parallel. The following 2 commands are similar. The
        run-p command is shorter and available on Windows. $ run-p lint build $
        npm run lint & npm run build Note1: If a script exited with a non-zero
        code, the other scripts and those descendant processes are killed with
        SIGTERM (On Windows, with taskkill.exe /F /T). If --continue-on-error
        option is given, this behavior will be disabled. Note2: & operator does
        not work on Windows' cmd.exe. But run-p works fine there. Glob-like
        pattern matching for script names It's "scripts" field of package.json.
        For example: We can run a script with npm run command. On the other
        hand, this run-p command runs multiple scripts in parallel. The
        following 2 commands are similar. The run-p command is shorter and
        available on Windows. $ run-p lint build $ npm run lint & npm run build
        Note1: If a script exited with a non-zero code, the other scripts and
        those descendant processes are killed with SIGTERM (On Windows, with
        taskkill.exe /F /T). If --continue-on-error option is given, this
        behavior will be disabled. Note2: & operator does not work on Windows'
        cmd.exe. But run-p works fine there. Glob-like pattern matching for
        script names
      </p> */}
    </div>
  );
};

export default ResultBox;
