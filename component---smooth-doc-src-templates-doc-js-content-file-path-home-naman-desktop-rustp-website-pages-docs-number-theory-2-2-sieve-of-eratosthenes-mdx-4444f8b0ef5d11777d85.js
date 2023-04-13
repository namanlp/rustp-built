"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[816],{56077:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(27378),a=t(20951),l=t.p+"static/sieve-1-cbb0c1e8fa2422f21c71acd5681fe85e.webp",i=t.p+"static/sieve-2-73adad99d77130a894ff2c277d221eaf.webp",s=t.p+"static/sieve-4-46576f03ebe5e35bf7acbca4631a07f0.webp",o=t(88957);function m(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",strong:"strong",ol:"ol",li:"li",em:"em",pre:"pre",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"sieve-of-eratosthenes",style:{position:"relative"}},r.createElement(n.a,{href:"#sieve-of-eratosthenes","aria-label":"sieve of eratosthenes permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Sieve of Eratosthenes"),"\n",r.createElement(n.p,null,"and program to find all the prime numbers upto a given number in Rust Language."),"\n",r.createElement(n.h2,{id:"introduction",style:{position:"relative"}},r.createElement(n.a,{href:"#introduction","aria-label":"introduction permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Introduction"),"\n",r.createElement(n.p,null,"Sieve of Eratosthenes is one of the most efficient algorithm for finding all the prime numbers upto a given number."),"\n",r.createElement(n.p,null,"It can print all the prime numbers upto a given number in ",r.createElement(n.strong,null,"nearly linear time complexity")," , O( N log(log( N ))) to be precise, and linear space complexity."),"\n",r.createElement(n.p,null,"It also generates a complete list, which number upto N are primes and which are not. We can now check if a given number is prime or not in ",r.createElement(n.strong,null,"constant time complexity !")),"\n",r.createElement(n.p,null,"Sounds interesting? It is simple enough to understand also."),"\n",r.createElement(n.h2,{id:"algorithm",style:{position:"relative"}},r.createElement(n.a,{href:"#algorithm","aria-label":"algorithm permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Algorithm"),"\n",r.createElement(n.p,null,"In Sieve of Eratosthenes, we will be storing if a number is prime or not at the index. So, to check if 5 is prime, we just have to check for value at array[5], if it is true or false."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Initially, take a boolean array / vector of size n+1 and set initially every element to true. Now, set 0 and 1 to false ( Obviously number 0 and 1 are not prime numbers. )"),"\n"),"\n","\n",r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",{src:l,width:"100%",alt:"Initialize array for Sieve method"}),r.createElement(n.p,null,r.createElement(n.em,null,"Initial Array"))),"\n",r.createElement(n.ol,{start:"2"},"\n",r.createElement(n.li,null,"Now, traverse from 2 to n, and if the number is marked as true, mark all its multiple as false, except the number itself. Because if obviously, a number is multiple of a number greater than or equal to 2, it is not prime.\nAlso, if a number is marked true, it must be prime because it was not marked as False by any smaller number. Therefore, it is not a multiple of any smaller number, hence it is prime number."),"\n"),"\n","\n",r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",{src:i,width:"100%",alt:"Mark multiples of 2 as false"}),r.createElement(n.p,null,r.createElement(n.em,null,"After marking false all the multiples of 2"))),"\n",r.createElement(n.ol,{start:"3"},"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"If any number, say x,  is marked as false, there is no need to traverse through its multiples, because the multiples of x will be already be marked as false by the least prime number that divides x."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Repeat step 2 and 3 for all numbers upto n"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"After traversing all the numbers, we are left with a boolean array / vector in which the i index is set true, if number is prime, and false otherwise."),"\n"),"\n"),"\n","\n",r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",{src:s,width:"100%",alt:"Final Sieve Array"}),r.createElement(n.p,null,r.createElement(n.em,null,"Final Array"))),"\n",r.createElement(n.p,null,"I hope you understood the Algorithm and liked it. Now, let us implement it."),"\n",r.createElement(n.h2,{id:"program-without-optimization",style:{position:"relative"}},r.createElement(n.a,{href:"#program-without-optimization","aria-label":"program without optimization permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Program without optimization"),"\n",r.createElement(n.p,null,"Below is the basic implementation of Sieve of Eratosthenes."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"\nfn sieve(n: usize) -> Vec<bool>{\n\n    // Initialize Sieve Array with all elements initially set to True\n    let mut sieve_array = vec![true; n+1];\n\n    // Set arr[0] and arr[1] to false, because 0 and 1 are not prime\n    sieve_array[0] =  false;\n    sieve_array[1] = false;\n\n    // Traverse from 2 to n\n    // If a number is prime, mark all its multiples except number itself as false\n    for i in 2..n+1 {\n        if sieve_array[i] {\n\n            // Mark all the multiples except number itself as false\n            for j in (2*i..n+1).step_by(i) {\n                sieve_array[j] = false;\n            }\n        }\n    }\n\n    return sieve_array;\n}\n")),"\n",r.createElement(n.p,null,"Program With driver code"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},'use std::io::stdin;\n\nfn take_int() -> usize {\n    let mut input = String::new();\n    stdin().read_line(&mut input).unwrap();\n    return input.trim().parse().unwrap();\n}\n\n\nfn sieve(n: usize) -> Vec<bool>{\n\n    // Initialize Sieve Array with all elements initially set to True\n    let mut sieve_array = vec![true; n+1];\n\n    // Set arr[0] and arr[1] to false, because 0 and 1 are not prime\n    sieve_array[0] =  false;\n    sieve_array[1] = false;\n\n    // Traverse from 2 to n\n    // If a number is prime, mark all its multiples except number itself as false\n    for i in 2..n+1 {\n        if sieve_array[i] {\n\n            // Mark all the multiples except number itself as false\n            for j in (2*i..n+1).step_by(i) {\n                sieve_array[j] = false;\n            }\n        }\n    }\n\n    return sieve_array;\n}\n\n// Driver Code\npub fn main() {\n    // Take input and print all the numbers upto number\n    // And tell if they are prime\n    let number = take_int();\n\n    // Generate a sieve array for the given number\n    let sieve_array = sieve(number);\n\n    // Output if the number is prime or not\n    // We can now tell whether a number less than equal to N\n    // is Prime or not in O( 1 ) or constant time complexity\n    for i in 2..number+1 {\n        if sieve_array[i] {\n            println!("Yes, {}  is a prime number", i);\n        }\n        else {\n            println!("No, {} is not a prime number", i);\n        }\n    }\n}\n')),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Input")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"6"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Output")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"Yes, 2  is a prime number ",r.createElement("br"),"\nYes, 3  is a prime number ",r.createElement("br"),"\nNo, 4 is not a prime number ",r.createElement("br"),"\nYes, 5  is a prime number ",r.createElement("br"),"\nNo, 6 is not a prime number ",r.createElement("br")),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Time Complexity : O( n log(log(n)) )")," ",r.createElement("br"),"\n",r.createElement(n.strong,null,"Space Complexity : O( n )")),"\n",r.createElement(n.h2,{id:"optimized-sieve",style:{position:"relative"}},r.createElement(n.a,{href:"#optimized-sieve","aria-label":"optimized sieve permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Optimized Sieve"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"If we observe carefully, we can see that if a number is marked as prime, its smallest multiple that is not already marked as prime is its square. ",r.createElement("br"),"\n",r.createElement(n.strong,null,"For example :")," for number 5, ",r.createElement("br"),"\n5×1 = 5 ",r.createElement("br"),"\n5×2 = 10 ",r.createElement("br"),"\n5×3 = 15 ",r.createElement("br"),"\n5×4 = 20 ",r.createElement("br"),"\n5×5 = 25 ",r.createElement("br"),"\nWe can see that all the numbers upto 25 will already be marked as non-prime by numbers smaller than 5, that is 2, 3, 4 and so on. So, we do not have to traverse them again."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"We have to check numbers upto square root of N only, because if a number is not divisible by any number upto square root of N, it will not be divisible by any larger number. ",r.createElement("br"),"\nWe used the same logic to optimize code to ",r.createElement(n.a,{href:"/number-theory/prime-numbers/#check-if-a-number-is-prime"},"Check whether a number is Prime or not")),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"We have to check only odd numbers, because all even numbers except 2 are composite numbers. Similarly, we have to check only odd multiples of  numbers ( except 2 ), because even multiples are already marked false by 2."),"\n"),"\n"),"\n",r.createElement(n.p,null,"These optimizations can make Sieve method  ",r.createElement(n.strong,null,"faster by more than 50%"),"   in general, though it do not affect the time complexity of the code."),"\n",r.createElement(n.p,null,"Implementation of Sieve of Eratosthenes after these optimizations looks like"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"\n// Optimized Sieve of Eratosthenes\nfn sieve(n: usize) -> Vec<bool>{\n\n    // Initialize Sieve Array with all elements initially set to True\n    let mut sieve_array = vec![true; n+1];\n\n    // Set arr[0] and arr[1] to false, because 0 and 1 are not prime\n    sieve_array[0] =  false;\n    sieve_array[1] = false;\n\n    // Mark all even numbers as false, except 2\n    for i in (4..n+1).step_by(2) {\n        sieve_array[i] = false;\n    }\n\n    // Traverse from 3 to square root of n\n    // If a number is prime, mark all its multiples except number itself as false\n    // Optimization : Check numbers only upto square root of n\n    let mut i = 3;\n    while i*i<= n+1 {\n        if sieve_array[i] {\n\n            // Mark all the multiples except number itself as false\n            // Optimization : start from i*i, because smaller multiples are already marked\n            // Optimization : use 2*i as step, because  we need to check only odd multiples\n            for j in (i*i..n+1).step_by(2*i) {\n                sieve_array[j] = false;\n            }\n        }\n        // We do not have to check even numbers.\n        // So, we increment i by 2\n        i+=2;\n    }\n\n    return sieve_array;\n}\n")),"\n",r.createElement(n.p,null,"Use the same driver code."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Input")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"6"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Output")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"Yes, 2  is a prime number ",r.createElement("br"),"\nYes, 3  is a prime number ",r.createElement("br"),"\nNo, 4 is not a prime number ",r.createElement("br"),"\nYes, 5  is a prime number ",r.createElement("br"),"\nNo, 6 is not a prime number ",r.createElement("br")),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Time Complexity : O( n log(log(n)) )")," ",r.createElement("br"),"\n",r.createElement(n.strong,null,"Space Complexity : O( n )")),"\n",r.createElement(n.h2,{id:"conclusion",style:{position:"relative"}},r.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",r.createElement(n.p,null,"Sieve of Eratosthenes is a very popular and useful algorithm, used for finding all the prime numbers upto a given number.\nIn this article, we understood the Sieve of Eratosthenes method and also wrote function to find all the primes numbers upto a given number in Rust."),"\n",r.createElement(n.p,null,"Here is optimized function for easy access."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},"fn sieve(n: usize) -> Vec<bool>{\n    let mut sieve_array = vec![true; n+1];\n    sieve_array[0] =  false;\n    sieve_array[1] = false;\n    for i in (4..n+1).step_by(2) { sieve_array[i] = false; }\n\n    let mut i = 3;\n    while i*i<= n+1 {\n        if sieve_array[i] {\n            for j in (i*i..n+1).step_by(2*i) { sieve_array[j] = false; }\n        }\n        i+=2;\n    }\n    return sieve_array;\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Thank You")),"\n","\n",r.createElement(o.H,{title:"Sieve of Eratosthenes - Rust Programming",description:"Sieve of Eratosthenes is very popular and useful algorithm, used for finding all the prime numbers upto a given number. We will discuss Sieve of Eratosthenes and write function to find all the primes upto a given number in Rust."}))}var u=function(e){void 0===e&&(e={});var n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?r.createElement(n,e,r.createElement(m,e)):m(e)};function c(e){return e.children}function p(e){return r.createElement(c,e,r.createElement(u,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-home-naman-desktop-rustp-website-pages-docs-number-theory-2-2-sieve-of-eratosthenes-mdx-4444f8b0ef5d11777d85.js.map