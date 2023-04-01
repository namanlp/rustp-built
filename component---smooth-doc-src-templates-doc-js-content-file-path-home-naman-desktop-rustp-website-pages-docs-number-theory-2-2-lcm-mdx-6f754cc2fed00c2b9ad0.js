"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[247],{94111:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(27378),l=t(20951),r=t.p+"static/lcm-0efa406742e27af275dba2886bb18fd4.webp",i=t(88957);function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"least-common-multiple",style:{position:"relative"}},a.createElement(n.a,{href:"#least-common-multiple","aria-label":"least common multiple permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Least Common Multiple"),"\n",a.createElement(n.p,null,"and program in Rust to calculate it using Euclidean algorithm."),"\n",a.createElement(n.h2,{id:"what-is-least-common-multiple--lcm-",style:{position:"relative"}},a.createElement(n.a,{href:"#what-is-least-common-multiple--lcm-","aria-label":"what is least common multiple  lcm  permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"What is Least Common Multiple ( LCM )"),"\n",a.createElement(n.p,null,"Least Common Multiple of two natural numbers is the smallest natural number that is divisible by both the numbers."),"\n",a.createElement(n.p,null,"Lowest Common denominator is used for rational numbers, and it is LCM of denominators of both numbers."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"For Example :")," LCM of 100 and 75 is 300"),"\n","\n",a.createElement("div",{style:{textAlign:"center"}},a.createElement("img",{src:r,width:"100%",alt:"LCM of 150 and 210 is 1050"})),"\n",a.createElement(n.h2,{id:"naive-approach",style:{position:"relative"}},a.createElement(n.a,{href:"#naive-approach","aria-label":"naive approach permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Naive Approach"),"\n",a.createElement(n.p,null,"Let us suppose we have to find Least Common Multiple ( LCM ) of 2 numbers, a and b."),"\n",a.createElement(n.p,null,"The naive or brute force approach would be to traverse all the numbers from max(a, b) to a × b and find if it is divisible by both a and b. If yes, print the number and return."),"\n",a.createElement(n.p,null,"We will not write its code, because it is very clumsy."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Time Complexity : O( a × b )")," ",a.createElement("br"),"\n",a.createElement(n.strong,null,"Space Complexity : O( 1 )")),"\n",a.createElement(n.h2,{id:"efficient-euclidean-algorithm",style:{position:"relative"}},a.createElement(n.a,{href:"#efficient-euclidean-algorithm","aria-label":"efficient euclidean algorithm permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Efficient Euclidean algorithm"),"\n",a.createElement(n.p,null,"We know that, product of 2 numbers is equal to product of their GCD and LCM. Mathematically,"),"\n",a.createElement("center",null," ",a.createElement("b",null," a × b = GCD(a, b) × LCM(a, b)")," "),"\n",a.createElement(n.p,null,"We already saw ",a.createElement(n.a,{href:"/number-theory/gcd-or-hcf/"},"How To find HCF of 2 numbers using Euclidean Algorithm Here"),". We will use this function to find LCM of 2 numbers."),"\n",a.createElement(n.p,null,"So,"),"\n",a.createElement("center",null," ",a.createElement("b",null," LCM (a, b) = (a × b) / HCF(a, b)")," "),"\n",a.createElement(n.p,null,"Function using this approach is"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-rust"},"// Find GCD\nfn gcd(mut a:i128, mut b:i128) -> i128{\n    if a==b { return a; }\n    if b > a {\n        let temp = a;\n        a = b;\n        b = temp;\n    }\n    while b>0 {\n        let temp = a;\n        a = b;\n        b = temp%b;\n    }\n    return a;\n}\n\nfn lcm(a:i128, b:i128) -> i128{\n    // LCM = a*b / gcd\n    return a*(b/gcd(a,b));\n}\n")),"\n",a.createElement(n.p,null,"With driver code"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-rust"},'use std::io::stdin;\n\n// Read Input\n\nfn take_vector() -> Vec<i128> {\n    let mut input = String::new();\n    stdin().read_line(&mut input).unwrap();\n    let arr: Vec<i128> = input.trim()\n        .split_whitespace().map(|x| x.parse().unwrap()).collect();\n    return arr;\n}\n\n// Magic Starts here\n\n// Find GCD\nfn gcd(mut a:i128, mut b:i128) -> i128{\n    if a==b { return a; }\n    if b > a {\n        let temp = a;\n        a = b;\n        b = temp;\n    }\n    while b>0 {\n        let temp = a;\n        a = b;\n        b = temp%b;\n    }\n    return a;\n}\n\nfn lcm(a:i128, b:i128) -> i128{\n    // LCM = a*b / gcd\n    return a * (b/gcd(a,b));\n}\n\n// Driver Code\n\npub fn main() {\n    let numbers = take_vector();\n    println!("{}", lcm(numbers[0], numbers[1]));\n}\n')),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Input")),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"210 150"),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Output")),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"1050"),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Time Complexity : O( log(min (a, b)) )")," ",a.createElement("br"),"\n",a.createElement(n.strong,null,"Space Complexity : O( 1 )")),"\n",a.createElement(n.h2,{id:"conclusion",style:{position:"relative"}},a.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",a.createElement(n.p,null,"Least Common Multiple of two natural numbers is the smallest natural number that is divisible by both the numbers.\nIn this article, we made a program to compute Least Common Multiple (LCM) of two numbers in ",a.createElement(n.strong,null,"Logarithmic Time Complexity")," using Euclidean algorithm in Rust."),"\n",a.createElement(n.p,null,"Here is optimized function for easy access."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-rust"},"fn gcd(mut a:i128, mut b:i128) -> i128{\n    if a==b { return a; }\n    if b > a {\n        let temp = a;\n        a = b;\n        b = temp;\n    }\n    while b>0 {\n        let temp = a;\n        a = b;\n        b = temp%b;\n    }\n    return a;\n}\n\nfn lcm(a:i128, b:i128) -> i128{\n    return a*(b/gcd(a,b));\n}\n")),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Thank You")),"\n","\n",a.createElement(i.H,{title:"LCM or Least Common Multiple using Euclidean algorithm - Rust Programming",description:"Least Common Multiple of two natural numbers is the smallest natural number that is divisible by both the numbers. We will make function to find LCM of two numbers and optimize it to logarithmic time complexity using Euclidean algorithm in Rust."}))}var m=function(e){void 0===e&&(e={});var n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?a.createElement(n,e,a.createElement(c,e)):c(e)};function o(e){return e.children}function u(e){return a.createElement(o,e,a.createElement(m,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-home-naman-desktop-rustp-website-pages-docs-number-theory-2-2-lcm-mdx-6f754cc2fed00c2b9ad0.js.map