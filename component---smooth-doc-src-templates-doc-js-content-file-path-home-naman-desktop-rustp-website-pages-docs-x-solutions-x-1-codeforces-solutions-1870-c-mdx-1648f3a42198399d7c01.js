"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9163],{81397:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(27378),i=t(20951),a=t(88957);function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",strong:"strong",code:"code",pre:"pre"},(0,i.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"c-colorful-table",style:{position:"relative"}},r.createElement(n.a,{href:"#c-colorful-table","aria-label":"c colorful table permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"C. Colorful Table"),"\n",r.createElement(n.p,null,"and solution of this problem with proof in Rust Language"),"\n",r.createElement(n.h2,{id:"introduction",style:{position:"relative"}},r.createElement(n.a,{href:"#introduction","aria-label":"introduction permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Introduction"),"\n",r.createElement(n.p,null,"In this article, we will see my solution to the codeforces problem, ",r.createElement(n.a,{href:"https://codeforces.com/contest/1870/problem/C"},"C. Colorful Table"),", which came in Codeforces CodeTON Round 6 (Div. 1 + Div. 2, Rated, Prizes!)."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Note :")," My Solution might not be the most optimized one, but it is certainly working."),"\n",r.createElement(n.p,null,"You can go to above link to view the question statement."),"\n",r.createElement(n.h2,{id:"observation",style:{position:"relative"}},r.createElement(n.a,{href:"#observation","aria-label":"observation permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Observation"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Observation 1 :")," Clearly, if if b",r.createElement("sub",null,"i,j")," = a",r.createElement("sub",null,"i"),", then clearly b",r.createElement("sub",null,"j,i")," = a",r.createElement("sub",null,"i")," as well because min(x, y) = min(y, x).\n",r.createElement(n.strong,null,"Conclusion 1 :")," So, all the elements will form a ",r.createElement(n.strong,null,"square"),", because let us say, length is greater than width. Then, there must be some element, that is present in length, but not in width, which is not possible."),"\n",r.createElement(n.p,null,"So, we just have to find the edge length of the above-mentioned square to find the answer. This can be achieved"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Observation 2 :")," So, we have to find first and last position where element is minimum.\n",r.createElement(n.strong,null,"Conclusion 2 :")," As we have to output the sum of width and height of this rectangle ( or square ), we can simply say that edge of the square is the difference of positions where the element is first minimum and last minimum + 1."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Mathematically :")," Answer = 2×(1 + last index - first index where element or color is minimum)"),"\n",r.createElement(n.h2,{id:"approach",style:{position:"relative"}},r.createElement(n.a,{href:"#approach","aria-label":"approach permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Approach"),"\n",r.createElement(n.p,null,"Now, all we have to do is to find for each color, when it is minimum, both in front and back."),"\n",r.createElement(n.p,null,"For this, first of all, we can store indices of each color in a vector of vector. It will take O( k+N ) time complexity and O( k+N ) space complexity."),"\n",r.createElement(n.p,null,"Then, we will make an ",r.createElement(n.code,null,"minimum")," set, and insert all indices at first. Also, it must be a BTreeSet, because we have to find its minimum and maximum value."),"\n",r.createElement(n.p,null,"Then we will traverse the colors from 1 to k and print the difference of first and last minimum, and remove all the indices of the indices where the color has come using the matrix we made earlier."),"\n",r.createElement(n.h2,{id:"proof",style:{position:"relative"}},r.createElement(n.a,{href:"#proof","aria-label":"proof permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Proof"),"\n",r.createElement(n.p,null,"As we are traversing number from 1 to k+1, and removing all the occurrences of the number, it can be easily proved that all the indices of numbers less than given number are already removed from the ",r.createElement(n.code,null,"minimum")," set."),"\n",r.createElement(n.p,null,"So, if all the numbers less than the given number are already removed from this set, it is clear that this number is minimum for these indices in the ",r.createElement(n.code,null,"minimum")," set."),"\n",r.createElement(n.p,null,"Hence, proved."),"\n",r.createElement(n.h2,{id:"program",style:{position:"relative"}},r.createElement(n.a,{href:"#program","aria-label":"program permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Program"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-rust"},'/*\nThis template is made by Naman Garg <naman.rustp@gmail.com>\nGitHub : https://github.com/namanlp\nGitLab : https://gitlab.com/namanlp\nWebsite : https://rustp.org\n\nYou can visit https://rustp.org/basic-programs/basic-template/\nfor understanding the template\n\nFeel free to copy the template, but not the solutions :D\nThank You\n */\n\n#![allow(unused)]\n\nuse std::collections::BTreeSet;\nuse std::io::stdin;\n\nfn take_int() -> usize {\n    let mut input = String::new();\n    stdin().read_line(&mut input).unwrap();\n    return input.trim().parse().unwrap();\n}\n\nfn take_vector() -> Vec<usize> {\n    let mut input = String::new();\n    stdin().read_line(&mut input).unwrap();\n    let arr: Vec<usize> = input.trim().split_whitespace().map(|x| x.parse().unwrap()).collect();\n    return arr;\n}\n\nfn take_string() -> Vec<char> {\n    let mut input = String::new();\n    stdin().read_line(&mut input).unwrap();\n    let vec: Vec<char> = input.trim().chars().collect();\n    return vec;\n}\n\nfn to_string(vec: Vec<char>) -> String { return vec.iter().collect::<String>(); }\n\nfn solve() {\n// ======================= Code Here =========================\n    let n_k = take_vector();\n    let n = n_k[0];\n    let k = n_k[1];\n\n    let arr = take_vector();\n\n    // Matrix for storing indices of the colors\n    let mut indices = vec![Vec::new(); k+1];\n\n    for i in 0..n {\n        indices[arr[i]].push(i);\n    }\n\n    // Minimum set contains all the available indices\n    let mut minimum = BTreeSet::new();\n\n    // Insert all the indices in the beginning\n    for i in 0..n {\n        minimum.insert(i);\n    }\n\n    for i in 1..k+1 {\n        // If the color is not present in array at all, return 0\n        if indices[i].is_empty() { print!("0 ");continue; }\n\n        // Print answer\n        print!("{} ", 2 * (1+ minimum.last().unwrap()-minimum.first().unwrap()));\n\n        // Remove the covered indices\n        for j in &indices[i] {\n            minimum.remove(&j);\n        }\n    }\n    println!();\n}\n\npub fn main() {\n    let t = take_int();\n    for _ in 0..t { solve(); }\n}\n')),"\n",r.createElement(n.h2,{id:"conclusion",style:{position:"relative"}},r.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",r.createElement(n.p,null,"In this article, we discussed solution to Codeforces problem 1870C. Colorful Table along with observations, proof and program in Rust Language."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Thank You")),"\n","\n",r.createElement(a.H,{title:"Codeforces 1870C solution with proof - Rust Programming",description:"In this article, we will discuss solution to Codeforces problem 1870C Colorful Table along with observations, proof and program in Rust Language.",img:"https://rustp.org/Static_Images_DND/Social/Codeforces/Codeforces_1870C_Social.png"}))}var o=function(e){void 0===e&&(e={});var n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?r.createElement(n,e,r.createElement(l,e)):l(e)};function s(e){return e.children}function c(e){return r.createElement(s,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-home-naman-desktop-rustp-website-pages-docs-x-solutions-x-1-codeforces-solutions-1870-c-mdx-1648f3a42198399d7c01.js.map