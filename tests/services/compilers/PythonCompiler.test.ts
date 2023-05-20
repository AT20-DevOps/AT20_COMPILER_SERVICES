/**
@PythonCompiler.test.ts Copyright(c) 2023 Jalasoft
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
import PythonCompiler from "../../../src/services/compilers/python/PythonCompiler";

const filePath = './examples/';

describe('Test Python Compiler', () => {

    /* This is a test case that checks if a new instance of the PythonCompiler class can be created
    successfully and if it can compile and run a Python file named "Example_python.py" with an input
    of 3, and return the expected output of "Hello world! (Python)". The test uses the Jest testing
    framework and the `expect` function to compare the actual output of the `run` method with the
    expected output. */
    test('Instance a new python Compiler success', () => {
        const compiler = new PythonCompiler();
        const expected =  compiler.run(filePath + 'Example_python.py', '3');
        const result = {"stderr": "", "stdout": "Hello world! (Python)\n"};
        expect(expected).toStrictEqual(result);
    });

    /* This test case is checking if the PythonCompiler class can handle a scenario where the file path
    provided to the `run` method is incorrect. It creates a new instance of the PythonCompiler
    class, attempts to run a Python file with an incorrect file path and an input of 3, and expects
    the output to be an empty string for both `stderr` and `stdout`. The purpose of this test is to
    ensure that the compiler can handle errors related to incorrect file paths and provide an
    appropriate response. */
    test('File path wrong', () => {
        const compiler = new PythonCompiler();
        const expected =  compiler.run(filePath, '3');
        const result = {"stderr": "", "stdout": ""};
        expect(expected).toStrictEqual(result);
    });

    /* This is a test case that checks if the PythonCompiler class can handle a scenario where the file
    path provided to the `run` method is empty. It creates a new instance of the PythonCompiler
    class, attempts to run a Python file with an empty file path and an empty input, and expects the
    output to throw a `CompilerException`. The purpose of this test is to ensure that the compiler
    can handle errors related to empty file paths and provide an appropriate response. */
    test('File path wrong', () => {
        expect(() => {
            const compiler = new PythonCompiler();
            compiler.run('', '');            
        }).toThrow(CompilerException);
    });
    
    /* This is a test case that checks if the PythonCompiler class can handle a scenario where the file
    path provided to the `run` method is a space character. It creates a new instance of the
    PythonCompiler class, attempts to run a Python file with a file path of a space character and an
    empty input, and expects the output to throw a `CompilerException`. The purpose of this test is
    to ensure that the compiler can handle errors related to invalid file paths and provide an
    appropriate response. */
    test('File path wrong, space input', () => {
        expect(() => {
            const compiler = new PythonCompiler();
            compiler.run(' ', '');            
        }).toThrow(CompilerException);
    });
});