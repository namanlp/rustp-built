"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[158],{82359:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var i=t(27378),a=t(20951),l=t(88957);function r(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",h3:"h3",ol:"ol",pre:"pre",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(n.h1,{id:"01-knapsack-problem",style:{position:"relative"}},i.createElement(n.a,{href:"#01-knapsack-problem","aria-label":"01 knapsack problem permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"0/1 Knapsack Problem"),"\n",i.createElement(n.p,null,"and space optimized Dynamic Programming Solution to it using tabulation and memoization in Rust Language."),"\n",i.createElement(n.h2,{id:"introduction",style:{position:"relative"}},i.createElement(n.a,{href:"#introduction","aria-label":"introduction permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Introduction"),"\n",i.createElement(n.p,null,"0/1 Knapsack Problem is a classical Dynamic Programming problem. In this problem, you are a thief :D"),"\n",i.createElement(n.p,null,"So, in 0/1 knapsack problem, you are given a list of items, along with their weights and profits if you sell them. But you have a limited capacity knapsack, say ",i.createElement(n.strong,null,"W"),", that you can use to take the items with you."),"\n",i.createElement(n.p,null,"Also, you have whole items, that is, either you can take the item or leave it and you can take 1 item only once."),"\n",i.createElement(n.p,null,"You have to ",i.createElement(n.strong,null,"maximize the profit")," you can earn by taking the items in the knapsack."),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"For Example :")),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"Item Weight = [1, 4, 5, 7]"),"\n",i.createElement(n.li,null,"Profits = [3, 6, 9, 11]"),"\n",i.createElement(n.li,null,"W = 11"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Answer :")," 18, ( Taking items weights [1, 4, 5])"),"\n",i.createElement(n.h2,{id:"recursive-solution",style:{position:"relative"}},i.createElement(n.a,{href:"#recursive-solution","aria-label":"recursive solution permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Recursive Solution"),"\n",i.createElement(n.p,null,"The recursive solution is pretty simple. We can either include a given item in the knapsack, or do not include it."),"\n",i.createElement(n.p,null,"So, we simply check all the possibilities, and return the maximum profit that we can obtain. We use the given algorithm."),"\n",i.createElement(n.h3,{id:"algorithm",style:{position:"relative"}},i.createElement(n.a,{href:"#algorithm","aria-label":"algorithm permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Algorithm"),"\n",i.createElement(n.ol,null,"\n",i.createElement(n.li,null,"If the remaining weight in knapsack is less than the weight of given item, we can not carry it. Hence, check the other items."),"\n",i.createElement(n.li,null,"We first try to include the item in the knapsack, and check the profit of remaining items with remaining weights recursively."),"\n",i.createElement(n.li,null,"Then we exclude the item and check profit of remaining items and weight recursively."),"\n",i.createElement(n.li,null,"We return the maximum profit earned through both the methods as the answer."),"\n"),"\n",i.createElement(n.h3,{id:"function",style:{position:"relative"}},i.createElement(n.a,{href:"#function","aria-label":"function permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Function"),"\n",i.createElement(n.p,null,"Here is the function using above algorithm"),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},"\nuse std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize) -> usize{\n\n    // If we have 0 elements remaining or knapsack filled, return 0\n    if n==0 || w == 0 {\n        return 0;\n    }\n\n    // If the nth element has higher weight than available capacity,\n    // it can not be carried. So, return without including item\n    if weights[n-1] > w {\n        return knapsack(w, weights, profits, n-1);\n    }\n\n    // Else, we check by including and excluding the given item\n    // And return max of it\n    return max(\n        // If we exclude item, simply return function for n-1 items\n        knapsack(w, weights, profits, n-1),\n\n        // If we include item, return profit of given item +\n        // maximum value from given weight for remaining items\n        profits[n-1] + knapsack(w-weights[n-1], weights, profits, n-1));\n}\n")),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Input")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"1 4 5 7 ",i.createElement("br"),"\n3 6 9 11 ",i.createElement("br"),"\n11"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Output")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"18"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Time Complexity : O( 2",i.createElement("sup",null,"n")," )")," ",i.createElement("br"),"\n",i.createElement(n.strong,null,"Space Complexity : O( n )")),"\n",i.createElement(n.p,null,"( Space complexity includes recursive stack space )"),"\n",i.createElement(n.h2,{id:"overlapping-sub-problems",style:{position:"relative"}},i.createElement(n.a,{href:"#overlapping-sub-problems","aria-label":"overlapping sub problems permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Overlapping Sub-problems"),"\n",i.createElement(n.p,null,"If we have a look carefully on recursive approach, we computed multiple results many times."),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"For Example :")," If weights are [1, 2, 3, 4, 5, 6, 7, 8] and ",i.createElement(n.strong,null,"W")," = 20,"),"\n",i.createElement(n.p,null,"We have to compute best answer for n = 2, and W = 5 multiple times, for example, if we select [8, 7] , [8, 4, 3], [7, 5, 3], [6, 5, 4] etc.\nAnd it takes 4 recursions each time, when we include and exclude 2 and 1. If we store it in a matrix, we do not have to calculate it again and again."),"\n",i.createElement(n.p,null,"These are called ",i.createElement(n.strong,null,"Overlapping Sub-problems")," because they are smaller part of large problems, and are computed again and again."),"\n",i.createElement(n.p,null,"So, we simply calculate them once, and store it in a matrix, and retrieve it when necessary."),"\n",i.createElement(n.p,null,"This is called Dynamic Programming Approach for the problem."),"\n",i.createElement(n.h2,{id:"memoization--top-down-dp--method",style:{position:"relative"}},i.createElement(n.a,{href:"#memoization--top-down-dp--method","aria-label":"memoization  top down dp  method permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Memoization ( Top-down DP ) Method"),"\n",i.createElement(n.p,null,"In memoization method, we simply take a DP matrix, and store the computed result."),"\n",i.createElement(n.h3,{id:"algorithm-1",style:{position:"relative"}},i.createElement(n.a,{href:"#algorithm-1","aria-label":"algorithm 1 permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Algorithm"),"\n",i.createElement(n.ol,null,"\n",i.createElement(n.li,null,"Initially, set all the elements of dp matrix to -1. ( Do not set to 0 because result of some sub-problems will be 0 itself. They will be computed again and again)"),"\n",i.createElement(n.li,null,"If the profit for given weight and given n is not -1 in the DP matrix, return the value."),"\n",i.createElement(n.li,null,"Else, compute the profit using recursion and store it in DP Matrix, at given weight and given n."),"\n"),"\n",i.createElement(n.h3,{id:"function-1",style:{position:"relative"}},i.createElement(n.a,{href:"#function-1","aria-label":"function 1 permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Function"),"\n",i.createElement(n.p,null,"Here is the function using above algorithm"),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},"use std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize, dp: &mut Vec<Vec<i64>>) -> i64{\n\n    // If we have 0 elements remaining or knapsack is already filled, return 0\n    if n==0 || w == 0 {\n        dp[n][w] = 0;\n        return 0;\n    }\n\n    // If already calculated result earlier, return it\n    if dp[n][w] != -1 {\n        return dp[n][w];\n    }\n\n    // If the nth element has higher weight than available capacity,\n    // it can not be carried. So, return without including item\n    if weights[n-1] > w {\n        dp[n][w] = knapsack(w, weights, profits, n-1, dp);\n        return dp[n][w];\n    }\n\n    // Else, we check by including and excluding the given item\n    // And return max of it\n\n    dp[n][w] = max(\n        // If we exclude item, simply return function for n-1 items\n        knapsack(w, weights, profits, n-1, dp),\n\n        // If we include item, return profit of given item +\n        // maximum value from given weight for remaining items\n        profits[n-1] as i64 + knapsack(w-weights[n-1], weights, profits, n-1, dp));\n\n    return dp[n][w];\n}\n")),"\n",i.createElement(n.p,null,"With Driver code"),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},'use std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize, dp: &mut Vec<Vec<i64>>) -> i64{\n\n    // If we have 0 elements remaining or knapsack filled, return 0\n    if n==0 || w == 0 {\n        dp[n][w] = 0;\n        return 0;\n    }\n\n    // If already calculated result, return it\n    if dp[n][w] != -1 {\n        return dp[n][w];\n    }\n\n    // If the nth element has higher weight than available capacity,\n    // it can not be carried. So, return without including item\n    if weights[n-1] > w {\n        dp[n][w] = knapsack(w, weights, profits, n-1, dp);\n        return dp[n][w];\n    }\n\n    // Else, we check by including and excluding the given item\n    // And return max of it\n\n    dp[n][w] = max(\n        // If we exclude item, simply return function for n-1 items\n        knapsack(w, weights, profits, n-1, dp),\n\n        // If we include item, return profit of given item +\n        // maximum value from given weight for remaining items\n        profits[n-1] as i64 + knapsack(w-weights[n-1], weights, profits, n-1, dp));\n\n    return dp[n][w];\n}\n\n\n// Driver Code\n\nuse std::io;\n\nfn take_vector() -> Vec<usize> {\n    let mut input = String::new();\n    io::stdin().read_line(&mut input).unwrap();\n    let arr: Vec<usize> = input.trim().split_whitespace()\n        .map(|x| x.parse().unwrap()).collect();\n    return arr;\n}\n\nfn main() {\n    let weights = take_vector();\n    let profits = take_vector();\n    let w = take_vector()[0];\n\n    // Declare DP Matrix\n    let mut dp = vec![vec![-1 as i64; w+1]; weights.len()+1];\n\n    println!("{}", knapsack(w, &weights, &profits, weights.len() , &mut dp));\n}\n\n')),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Input")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"1 4 5 7 ",i.createElement("br"),"\n3 6 9 11 ",i.createElement("br"),"\n11"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Output")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"18"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Time Complexity : O( n*w )")," ",i.createElement("br"),"\n",i.createElement(n.strong,null,"Space Complexity : O( n*w )")),"\n",i.createElement(n.h2,{id:"tabulation---bottom-up-dp---method",style:{position:"relative"}},i.createElement(n.a,{href:"#tabulation---bottom-up-dp---method","aria-label":"tabulation   bottom up dp   method permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Tabulation  ( Bottom-up DP )  Method"),"\n",i.createElement(n.p,null,"Although time and space complexities of tabulation as well as memoization method are same, tabulation is much more efficient as there are a lot of expensive recursive calls in memoization."),"\n",i.createElement(n.p,null,"In tabulation method, we make the matrix, and fill it first on the basis of base condition, and then on the basis of previous row."),"\n",i.createElement(n.h3,{id:"algorithm-2",style:{position:"relative"}},i.createElement(n.a,{href:"#algorithm-2","aria-label":"algorithm 2 permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Algorithm"),"\n",i.createElement(n.ol,null,"\n",i.createElement(n.li,null,"Initially, set elements of first row and first column as 0, because no profit if n = 0, that is no item left or w = 0, that is knapsack has 0 capacity left."),"\n",i.createElement(n.li,null,"For all the values till weight of n",i.createElement("sup",null,"th")," item, fill the given row with previous row, because we can not include the item if capacity of knapsack is less than its weight."),"\n",i.createElement(n.li,null,"Then, fill the remaining row with maximum profit if we include the item, and if we exclude the item."),"\n"),"\n",i.createElement(n.h3,{id:"function-2",style:{position:"relative"}},i.createElement(n.a,{href:"#function-2","aria-label":"function 2 permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Function"),"\n",i.createElement(n.p,null,"Here is the function using above algorithm"),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},"use std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize, dp: &mut Vec<Vec<i64>>) -> i64{\n\n    // Initially, set the first row and first column to 0\n    // Because, if n = 0, no item left\n    // If w = 0, no capacity, hence no more profit.\n\n    for i in 0..n+1 { dp[i][0] = 0; }\n    for i in 0..w+1 { dp[0][i] = 0; }\n\n    // Now, we run a loop for all n from 1 to n\n    for i in 1..n+1 {\n        // For all weights less than the weight of given item, we can not include it\n        // So, copy from previous row.\n        for j in 1..weights[i-1] {\n            dp[i][j] = dp[i-1][j];\n        }\n\n        // Now, for higher weights, we take max of\n        // First excluding, than including the item\n\n        for j in weights[i-1]..w+1 {\n            dp[i][j] = max(dp[i-1][j],  profits[i-1] as i64 + dp[i-1][j-weights[i-1]]);\n        }\n    }\n\n    // Finally, return the answer\n    return dp[n][w];\n}\n\n")),"\n",i.createElement(n.p,null,"Use the same driver code."),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Input")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"1 4 5 7 ",i.createElement("br"),"\n3 6 9 11 ",i.createElement("br"),"\n11"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Output")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"18"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Time Complexity : O( n*w )")," ",i.createElement("br"),"\n",i.createElement(n.strong,null,"Space Complexity : O( n*w )")),"\n",i.createElement(n.h2,{id:"space-optimized-tabulation-method",style:{position:"relative"}},i.createElement(n.a,{href:"#space-optimized-tabulation-method","aria-label":"space optimized tabulation method permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Space Optimized Tabulation Method"),"\n",i.createElement(n.p,null,"If we observe the above tabulation method carefully, we find that for calculating the profit for a given n and w, ",i.createElement(n.strong,null,"we only need previous row"),"."),"\n",i.createElement(n.p,null,"In the above algorithm, step 1 is base case or initialization step, and do not require any other row."),"\n",i.createElement(n.p,null,"Step 2 and Step 3 requires only previous row."),"\n",i.createElement(n.p,null,"Hence, we can optimize our space complexity, by storing only the previous row and not the whole matrix."),"\n",i.createElement(n.h3,{id:"function-3",style:{position:"relative"}},i.createElement(n.a,{href:"#function-3","aria-label":"function 3 permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Function"),"\n",i.createElement(n.p,null,"Here is the function using space optimization of tabulation method."),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},"use std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize) -> i64{\n\n    // Initially, set the first row  0\n    // Because, if n = 0, no item, hence no profit\n\n    // Only O(W) space\n    let mut previous = vec![0; w+1];\n    let mut current = vec![0; w+1];\n\n\n    for i in 1..n+1 {\n        // For all weights less than the weight of given item, we can not include it\n        // So, copy from previous row.\n        for j in 1..weights[i-1] {\n            current[j] = previous[j];\n        }\n\n        // Now, for higher weights, we take max of\n        // First excluding, than including the item\n        for j in weights[i-1]..w+1 {\n            current[j] = max(previous[j],  profits[i-1] as i64 + previous[j-weights[i-1]]);\n        }\n\n        // Copy the elements of current to previous\n        for j in 0..w+1 {\n            previous[j] = current[j]\n        }\n    }\n\n    // Finally, return the answer\n    return current[w];\n}\n")),"\n",i.createElement(n.p,null,"Use the same driver code, except removing DP matrix from driver code."),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Input")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"1 4 5 7 ",i.createElement("br"),"\n3 6 9 11 ",i.createElement("br"),"\n11"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Output")),"\n",i.createElement(n.blockquote,null,"\n",i.createElement(n.p,null,"18"),"\n"),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Time Complexity : O( n*w )")," ",i.createElement("br"),"\n",i.createElement(n.strong,null,"Space Complexity : O( w )")),"\n",i.createElement(n.h2,{id:"conclusion",style:{position:"relative"}},i.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},i.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",i.createElement(n.p,null,"0/1 Knapsack Problem is a classical Dynamic Programming problem. In this problem, you have to maximize the profit by using a limited capacity knapsack."),"\n",i.createElement(n.p,null,"In this article, we saw how to solve the 0/1 Knapsack problem, first using recursion and then using Dynamic Programming, memoization as well as tabulation method, and latter the space optimized tabulation method in Rust Language."),"\n",i.createElement(n.p,null,"Here is the optimized function for easy access"),"\n",i.createElement(n.pre,null,i.createElement(n.code,{className:"language-rust"},"use std::cmp::max;\n\nfn knapsack(w:usize, weights:&Vec<usize>, profits:&Vec<usize>, n:usize) -> i64{\n    let mut prev = vec![0; w+1];\n    let mut curr = vec![0; w+1];\n    for i in 1..n+1 {\n        for j in 1..weights[i-1] { curr[j] = prev[j]; }\n        for j in weights[i-1]..w+1 {\n            curr[j] = max(prev[j],  profits[i-1] as i64 + prev[j-weights[i-1]]);\n        }\n        for j in 0..w+1 { prev[j] = curr[j] }\n    }\n    return curr[w];\n}\n")),"\n",i.createElement(n.p,null,i.createElement(n.strong,null,"Thank You")),"\n","\n",i.createElement(l.H,{title:" 0/1 Knapsack Problem using Recursion, Memoization and Tabulation and Space Optimization - Dynamic Programming - Rust Programming",description:"In 0/1 Knapsack problem, you have to maximize profit using a limited capacity knapsack. We will see recursive, memoization, tabulation and space optimized DP solution in Rust Language."}))}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?i.createElement(n,e,i.createElement(r,e)):r(e)};function o(e){return e.children}function s(e){return i.createElement(o,e,i.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-home-naman-desktop-rustp-website-pages-docs-5-algorithms-5-2-dynamic-programming-0-1-knapsack-mdx-8f41bf0aec32f375bec6.js.map