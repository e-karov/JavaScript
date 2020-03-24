// 100 / 100
let solution = (function (){

    function add(vec1, vec2){
        let x3 = vec1[0] + vec2[0];
        let y3 = vec1[1] + vec2[1];

        return [x3, y3];
    };

    function multiply(vec1, scalar){
        return [vec1[0] * scalar, vec1[1] * scalar]
    };

    function length (vec) {
        return Math.sqrt((vec[0] ** 2) + (vec[1] ** 2));
    };

    function dot(vec1, vec2){
        return (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
    };

    function cross(vec1, vec2){
        return vec1[0] * vec2[1] - vec1[1] * vec2[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}());

console.log(solution.cross([3, 7], [1, 0]));