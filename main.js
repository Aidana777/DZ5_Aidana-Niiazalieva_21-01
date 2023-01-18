const input = document.querySelector('#input')
const createBtn = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')
const divBns = document.createElement('div')
  

const createTodo = () => {
    if (input.value.trim() === '') {
        input, value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        text.innerText = input.value
        div.append(text)
        todoList.append(div)
    }
    
    input.value = ''



}

const removeBtn = document.createElement('button')
const editBtn = document.createElement('button')
divBns.classList.add('buttons_div')
removeBtn.classList.add('delete_button')
editBtn.classList.add('edit_button')
divBns.append(removeBtn, editBtn)


createBtn.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})