"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4144],{67695:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(27378),a=t(20951),l=t(88957);function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",strong:"strong",code:"code",blockquote:"blockquote",h3:"h3",pre:"pre"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"function-to-input-a-single-number",style:{position:"relative"}},r.createElement(n.a,{href:"#function-to-input-a-single-number","aria-label":"function to input a single number permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Function to Input a single number"),"\n",r.createElement(n.p,null,"For Competitive Programming in Rust"),"\n",r.createElement(n.h2,{id:"introduction",style:{position:"relative"}},r.createElement(n.a,{href:"#introduction","aria-label":"introduction permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Introduction"),"\n",r.createElement(n.p,null,"In Competitive Programming, it is generally the very first step to take a number as an input ",r.createElement(n.strong,null,"and store it as a number")," for multiple operations, like addition, subtraction, multiplication, division etc."),"\n",r.createElement(n.p,null,"So, it is better to make a function and just call it instead of rewriting it again and again. It should be ",r.createElement(n.strong,null,"included in your template")),"\n",r.createElement(n.h2,{id:"what-are-we-doing",style:{position:"relative"}},r.createElement(n.a,{href:"#what-are-we-doing","aria-label":"what are we doing permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"What are we doing"),"\n",r.createElement(n.p,null,"In Rust, and most other programming languages, ",r.createElement(n.strong,null,"input is taken as string of characters"),". So, it is necessary to convert the string into desired numerical data type like ",r.createElement(n.strong,null,r.createElement(n.code,null,"i8, u8 , i16, u16, isize, usize, f32, f64"))," etc."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Note :")," In this program, we will assume that ",r.createElement(n.strong,null,"integers are in different lines")," and only 1 integer per line is allowed. For multiple integers in a single line, see ",r.createElement(n.a,{href:"/basic-programs/input-array-of-numbers/"},"Function to Input array of numbers")),"\n",r.createElement(n.h2,{id:"simple-multiplication-program",style:{position:"relative"}},r.createElement(n.a,{href:"#simple-multiplication-program","aria-label":"simple multiplication program permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Simple Multiplication Program"),"\n",r.createElement(n.p,null,"So, let's start with designing a multiplication program. In this program, we will take two integers and output will be the product of two numbers."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Example :")," ",r.createElement("br"),"\n",r.createElement(n.strong,null,"Input :")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"23 ",r.createElement("br"),"\n34"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Expected Output :")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"782"),"\n"),"\n",r.createElement(n.h3,{id:"1-declaring-function",style:{position:"relative"}},r.createElement(n.a,{href:"#1-declaring-function","aria-label":"1 declaring function permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Declaring function"),"\n",r.createElement(n.p,null,"As you might already know, functions are declared in rust using ",r.createElement(n.strong,null,r.createElement(n.code,null,"fn"))," keyword. Also, our function should return the input number. So, our function should look like"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"fn take_int() -> usize {\n // Function body here\n}\n")),"\n",r.createElement(n.p,null,"You can replace ",r.createElement(n.code,null,"usize")," with any data type you want, provide it can be parsed."),"\n",r.createElement(n.h3,{id:"2-declaring-a-string",style:{position:"relative"}},r.createElement(n.a,{href:"#2-declaring-a-string","aria-label":"2 declaring a string permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Declaring a string"),"\n",r.createElement(n.p,null,"Now, we need a string that is used to store the input. Let us name it ",r.createElement(n.code,null,"input")," itself"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"let mut input = String::new();\n")),"\n",r.createElement(n.h3,{id:"3-reading-into-the-string",style:{position:"relative"}},r.createElement(n.a,{href:"#3-reading-into-the-string","aria-label":"3 reading into the string permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Reading into the string"),"\n",r.createElement(n.p,null,"Now,  to obtain user input, we need to bring the ",r.createElement(n.strong,null,r.createElement(n.code,null,"io"))," input/output library into scope. This is present in standard library, called ",r.createElement(n.strong,null,r.createElement(n.code,null,"std"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"use std::io;\n")),"\n",r.createElement(n.p,null,"Now, we read and store input in ",r.createElement(n.strong,null,r.createElement(n.code,null,"input"))," string  we created earlier."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"io::stdin()\n    .read_line(&mut input)\n    .unwrap();\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"unwrap()"))," specifies that program will panic if, somehow, string cannot be read"),"\n",r.createElement(n.h3,{id:"4-converting-string-into-a-number",style:{position:"relative"}},r.createElement(n.a,{href:"#4-converting-string-into-a-number","aria-label":"4 converting string into a number permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. Converting String into a number"),"\n",r.createElement(n.p,null,"Now, we finally convert the string input to number and return the value."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"return input\n    .trim()\n    .parse()\n    .unwrap();\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,".trim()"))," is used to trim any leading or trailing whitespaces. ",r.createElement("br"),"\n",r.createElement(n.strong,null,r.createElement(n.code,null,".parse()"))," is used to convert the string to number. Interestingly, you don't have to tell the data type in this case, because Rust automatically determines it using return data type. Cool, no? ",r.createElement("br"),"\n",r.createElement(n.strong,null,r.createElement(n.code,null,"unwrap()"))," specifies that program will panic if, string can not be converted to number. For example if you input ",r.createElement(n.code,null,"12h"),", ",r.createElement(n.code,null,"23 34")," it will panic because it is not convertible to number. You must enter 1 number per line."),"\n",r.createElement(n.h3,{id:"5-putting-things-together",style:{position:"relative"}},r.createElement(n.a,{href:"#5-putting-things-together","aria-label":"5 putting things together permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"5. Putting things together"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"use std::io;\n\nfn take_int() -> usize {\n    // Declare string\n    let mut input = String::new();\n\n    // Input string\n    io::stdin().read_line(&mut input).unwrap();\n\n    // Return number\n    return input.trim().parse().unwrap();\n}\n")),"\n",r.createElement(n.h3,{id:"6-program-with-driver-code",style:{position:"relative"}},r.createElement(n.a,{href:"#6-program-with-driver-code","aria-label":"6 program with driver code permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"6. Program With driver code"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},'\nuse std::io;\n\nfn take_int() -> usize {\n    // Declare string\n    let mut input = String::new();\n\n    // Input string\n    io::stdin().read_line(&mut input).unwrap();\n\n    // Return number\n    return input.trim().parse().unwrap();\n}\n\n// Driver code\n\npub fn main() {\n    let number1 = take_int();\n    let number2 = take_int();\n    println!("{}", number1 * number2);\n}\n')),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Input :")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"23 ",r.createElement("br"),"\n34"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Output :")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"782"),"\n"),"\n",r.createElement(n.h2,{id:"conclusion",style:{position:"relative"}},r.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",r.createElement(n.p,null,"In this article, we designed a function that takes input from user and returns a number in any desired numerical data type. Here is the function"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"use std::io;\n\nfn take_int() -> usize {\n    let mut input = String::new();\n    io::stdin().read_line(&mut input).unwrap();\n    return input.trim().parse().unwrap();\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Note :")," We can change the data type of number returned by replacing ",r.createElement(n.strong,null,r.createElement(n.code,null,"usize"))," in above function with desired data type."),"\n",r.createElement(n.p,null,"We also designed a basic multiplication program, which takes input from user and output the product of these 2 numbers."),"\n",r.createElement(n.p,null,"In next article, we will discuss how to ",r.createElement(n.strong,null,"Input an array of numbers")," in Rust, which is more tricky, but is often required in competitive programming."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Thank You")),"\n","\n",r.createElement(l.H,{title:"Function to Input a single number - Rust Programming",description:"In Competitive Programming, it is generally the very first step to take a number as an input. We will design a function that takes input and returns a number in any desired numerical data type, and we will also make Simple Multiplication Program."}))}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?r.createElement(n,e,r.createElement(i,e)):i(e)};function o(e){return e.children}function u(e){return r.createElement(o,e,r.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-home-naman-desktop-rustp-website-pages-docs-1-basic-programs-input-single-number-mdx-f6088890e6b4d14de77c.js.map