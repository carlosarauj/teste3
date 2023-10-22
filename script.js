let ar1 = [1,2,3]
let ar2 = [4,5,6]

let arconc = ar1.concat(ar2)
console.log(arconc)

let ar3 = [...ar1, ...ar2, ...[10,11,12]]
console.log(ar3)