/**
@JavaCompiler.test.ts Copyright(c) 2023 Jalasoft
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
import JavaCompiler from "../../../src/services/compilers/JavaCompiler";

const filePath = 'examples/';

describe('Test Java Compiler', () => {

    /* This is a test case that checks if a new instance of the JavaCompiler class can be created
    successfully and if it can compile a Java file named "Example.java" located in the specified
    file path. The expected output is an object with an empty "stderr" property and a "stdout"
    property containing the string "Hello world! (Java)". The test passes if the actual output
    matches the expected output. */
    test('Instance a new java Compiler success', () => {
        const javaCompiler = new JavaCompiler();
        const expected =  javaCompiler.run(filePath + 'Example.java');
        const result = {"stderr": "", "stdout": "Hello world! (Java)"};
        expect(expected).toStrictEqual(result);
    });

    /* This is a test case that checks if the JavaCompiler class can handle a wrong file path input. It
    creates a new instance of the JavaCompiler class, attempts to compile a file with a wrong file
    path, and expects the output to be an object with an empty "stderr" property and an empty
    "stdout" property. The purpose of this test is to ensure that the JavaCompiler class can handle
    invalid file paths without crashing or producing unexpected results. */
    test('File path wrong', () => {
        const javaCompiler = new JavaCompiler();
        const expected =  javaCompiler.run(filePath);
        const result = {"stderr": "", "stdout": ""};
        expect(expected).toStrictEqual(result);
    });

    /* This is a test case that checks if the JavaCompiler class can handle an empty file path input.
    It creates a new instance of the JavaCompiler class, attempts to compile a file with an empty
    file path, and expects the output to throw a CompilerException. The purpose of this test is to
    ensure that the JavaCompiler class can handle invalid file paths without crashing and can throw
    an appropriate exception when necessary. */
    test('File path empty', () => {
        expect(() => {
            const javaCompiler = new JavaCompiler();
            javaCompiler.run('');
            console.log(javaCompiler.run(''));
        }).toThrow(CompilerException);
    });

    /* This is a test case that checks if the JavaCompiler class can handle an input file path that
    contains only a space character. It creates a new instance of the JavaCompiler class, attempts
    to compile a file with a space character as the file path, and expects the output to throw a
    CompilerException. The purpose of this test is to ensure that the JavaCompiler class can handle
    invalid file paths without crashing and can throw an appropriate exception when necessary. */
    test('File path wrong, space input', () => {
        expect(() => {
            const javaCompiler = new JavaCompiler();
            javaCompiler.run(' ');
            console.log(javaCompiler.run(' '));
        }).toThrow(CompilerException);
    });
});