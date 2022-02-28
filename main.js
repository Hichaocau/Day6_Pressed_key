const alert = document.querySelector('.alert')
const box = document.querySelector('.box')
const result = document.querySelector('.result')
const eKey = document.querySelector('.key p:last-child')
const eWhich = document.querySelector('.which p:last-child')
const eCode = document.querySelector('.code p:last-child')


// document.addEventListener('keydown', function(e){
// })

document.addEventListener('keydown', e =>{
    // HTML DOM KeyboardEvent
    eKey.innerHTML = e.key
    eWhich.innerHTML = e.which
    eCode.innerHTML = e.code
    result.innerHTML = e.which

    alert.classList.add('hide')
    box.classList.remove('hide')
})


// var json = '["javascript", "react"]'
var json = '"sjon"'

var json2 = JSON.parse(json)
console.log(json)
console.log(json2)
console.log(typeof json2)