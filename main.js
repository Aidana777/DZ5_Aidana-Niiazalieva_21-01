const input = document.querySelector('#input')
const createBtn = document.querySelector('#crete_todo')
const todoList = document.querySelector('#todo_list')
const div = document.createElement('div')
const text = document.createElement('h3')




const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        text.innerText = input.value
        deleteButton.innerText = 'delete'
        editButton.innerText = 'edit'

        todoList.append(div)
        buttonsDiv.append(deleteButton, editButton)
        div.append(text, buttonsDiv)

        deleteButton.onclick = () => {
            div.remove()
        }
        editButton.onclick = () => {
            let editText = prompt(`Edit: ${text.innerText}`).trim()
            if (editText === "") {
                alert("error")
               
            }else{
                editText === '' ? text.innerText : text.innerText = editText
            }
        }
    }

    input.value = ''




   


   
}

createBtn.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})