/*let v: number = 1;
v = v + "1";
console.log(v);*/
/*let a: [number] = [7, true, "Hallo"];
a[4] = [101, 102];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);*/
var s = { "zahl": 7, "wahr": true, text: "Hallo" };
console.log(s);
console.log(s["key"]);
console.log(s.key);
function isDivisible(dividend, divisor) { return (dividend % divisor == 0); }
;
isDivisible(4, 3);
isDivisible(4, 2);
function test(_x) {
    console.log(_x);
    return _x * 2;
}
var y;
y = test(172);
//# sourceMappingURL=test.js.map