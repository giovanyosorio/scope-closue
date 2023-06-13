var myglobal=0

function myfunction() {
    const number=1
     console.log(myglobal);

    function parent() { //funcion interna
        const inner=2
        console.log(number,myglobal);

        function child() {
            console.log(inner);
            console.log(number);
            console.log(myglobal);
        }
        return child()
    }
    return parent()
}

myfunction()
