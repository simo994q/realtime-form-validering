

let pass = document.getElementById('pass')
let confirmPass = document.getElementById('cPass')

pass.addEventListener('keyup', () => {
    if (pass.value.length >= 6) {
        pass.classList.add('valid')
        pass.classList.remove('notValid')
    } else {
        pass.classList.add('notValid')
        pass.classList.remove('valid')
    }
})

confirmPass.addEventListener('keyup', () => {
    if (confirmPass.value == pass.value) {
        confirmPass.classList.add('valid')
        confirmPass.classList.remove('notValid')
    } else {
        confirmPass.classList.add('notValid')
        confirmPass.classList.remove('valid')
    }
})