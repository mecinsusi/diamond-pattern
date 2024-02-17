function buildPyramid(n){
    console.log("Pyramid pattern: " + n)

    for (let i = 1; i <= n; i++){
        for ( let j = n; j >= 1; j--) {
            if (i <= j)
            process.stdout.write(' ') 
            else
            process.stdout.write('* ') }
    console.log()
        }
    for (let i = n; i >= 1; i--){
        for ( let j = n; j >= 1; j--) {
            if (i <= j)
            process.stdout.write(' ')
            else
            process.stdout.write('* ')}
    console.log()
        }
console.log("--------------------------")
}
buildPyramid(5)
buildPyramid(10)
buildPyramid(15)
buildPyramid(20)