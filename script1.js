function temp(){
    return document.getElementById('textBox').value
}
function creategreet(greet){
    function helper(name){
        console.log(greet+" "+name)
        let createList =document.createElement('li')
        createList.innerText = `${greet} ${name}`
        document.getElementById('list').appendChild(createList)
        console.log(createList.innerText)
    }
    return helper
}
let b1  = creategreet('good morning')
let b2  = creategreet('good evening')

