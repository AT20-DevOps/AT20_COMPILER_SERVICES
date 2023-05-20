/**
@JavaScriptCompiler.test.ts Copyright(c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft,ConfidentialInformation"). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
**/

import CompilerException from "../../../src/common/compilerException";
import JavaCompiler from "../../../src/services/compilers/JavaScriptCompiler";

const filePath = './examples/';

describe('Test JavaScript Compiler', () => {

    /* This is a test case that checks if a new instance of the `JavaCompiler` class can be created
    successfully and if it can compile a JavaScript file named `Example_javascript.js` located in
    the `filePath` directory. The expected output of the compilation is an empty `stderr` and a
    `stdout` message that says "Hello world (Javascript)". The `expect` function checks if the
    actual output of the compilation matches the expected output. */
    // test('Instance a new javaScript Compiler success', () => {
    //     const jsCompiler = new JavaCompiler();
    //     const expected =  jsCompiler.run(filePath + 'Example_javascript.js');
    //     const result = {"stderr": "", "stdout": "Hello world (Javascript)\n"};
    //     expect(expected).toStrictEqual(result);
    // });

    /* This test case is checking if the `JavaCompiler` class can handle a scenario where the file path
    provided to the `run` method is incorrect. The expected output of the compilation is an empty
    `stdout` and a `stderr` message that says "An unknown error occurred.". The `expect` function
    checks if the actual output of the compilation matches the expected output. */
    test('File path wrong', () => {
        const jsCompiler = new JavaCompiler();
        const expected =  jsCompiler.run(filePath);
        const result = {"stderr": "An unknown error occurred.", "stdout": ""};
        expect(expected).toStrictEqual(result);
    });

    /* This test case is checking if the `JavaCompiler` class can handle a scenario where an empty file
    path is provided to the `run` method. The `expect` function is checking if an error of type
    `CompilerException` is thrown when the `run` method is called with an empty file path. */
    test('File path wrong', () => {
        expect(() => {
            const jsCompiler = new JavaCompiler();
            jsCompiler.run('');
            console.log(jsCompiler.run(''));
        }).toThrow(CompilerException);
    });

    /* This test case is checking if the `JavaCompiler` class can handle a scenario where a space
    character is provided as the file path to the `run` method. The `expect` function is checking if
    an error of type `CompilerException` is thrown when the `run` method is called with a space
    character as the file path. */
    test('File path wrong, space input', () => {
        expect(() => {
            const jsCompiler = new JavaCompiler();
            jsCompiler.run(' ');
            console.log(jsCompiler.run(' '));
        }).toThrow(CompilerException);
    });
});