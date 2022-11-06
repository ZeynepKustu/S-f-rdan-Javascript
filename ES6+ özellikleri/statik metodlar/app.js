//statik metodlar

class Matematik {
    sqrt(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}
// const math = new Matematik();
// math.cube(3);
// console.log(math);
const math = new Matematik();
Matematik.cube(3);
console.log(math);
math.sqrt(4);