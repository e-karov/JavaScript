// 100 / 100
function solution(){
    var text = "";

    function append(str){
         text += str;
    }

    function removeStart(n){
        text = text.substring(n);
    }

    function removeEnd(n){
        text = text.substring(0, text.length-n);
    }

    function print(){
       console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
};

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();