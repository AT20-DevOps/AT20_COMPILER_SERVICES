/**
@CSharpCompiler.test.ts Copyright(c) 2023 Jalasoft
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
import CSharpCompiler from "../../../src/services/compilers/CSharpCompiler";

const filePath = './examples/';

describe('Test CSharp Compiler', () => {

    /* This is a Jest test case that checks if a new instance of the CSharpCompiler class can be
    created successfully and if it can compile a C# file named "Example_csharp.cs" located in the
    specified file path. The expected output of the compilation is compared to the actual output
    using the Jest assertion method `toStrictEqual()`. If the expected and actual outputs match, the
    test case passes. */
    // test('Instance a new cSharp Compiler success', () => {
    //     const cSharpCompiler = new CSharpCompiler();
    //     const expected =  cSharpCompiler.run(filePath + 'Example_csharp.cs');
    //     const result = {"stderr": "", "stdout": "Hello World! (C#)\n"};
    //     expect(expected).toStrictEqual(result);
    // });

    /* This is a Jest test case that checks if an instance of the CSharpCompiler class throws a
    CompilerException when attempting to compile an empty file path. The test case expects the
    `run()` method of the CSharpCompiler instance to throw a CompilerException, and if it does not,
    the test case fails. */
    test('File path wrong', () => {
        expect(() => {
            const cSharpCompiler = new CSharpCompiler();
            cSharpCompiler.run('');
            console.log(cSharpCompiler.run(''));
        }).toThrow(CompilerException);
    });
    
    /* This is a Jest test case that checks if an instance of the CSharpCompiler class throws a
    CompilerException when attempting to compile a file with an empty space as the file path. The
    test case expects the `run()` method of the CSharpCompiler instance to throw a
    CompilerException, and if it does not, the test case fails. */
    test('File path wrong, space input', () => {
        expect(() => {
            const cSharpCompiler = new CSharpCompiler();
            cSharpCompiler.run(' ');
            console.log(cSharpCompiler.run(' '));
        }).toThrow(CompilerException);
    });    
});