const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}];

for (const v of values) {
    if (v) {
        console.log(v, "is truthy");
    } else {
        console.log(v, "is falsy");
    }
}

console.log("hello" && "world");
console.log("" || "fallback");
console.log(null ?? "default");
console.log(0 || "default");
console.log(0 ?? "default");