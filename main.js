const input = document.querySelector('#input')
const createBtn = document.querySelector('#crete_todo')
const todoList = document.querySelector('#todo_list')
const div = document.createElement('div')
const text = document.createElement('h3')




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


const divTag = document.createElement("div")
const deleteBtn = document.createElement("button")
const editBtn = document.createElement("button")
divTag.classList.add("buttons_div")
deleteBtn.classList.add("delete_button")
deleteBtn.textContent='Delete'
editBtn.textContent='Edit'
editBtn.classList.add("edit_button")
divTag.append(deleteBtn, editBtn)
document.body.appendChild(divTag)

deleteBtn.addEventListener('click',()=>{
todoList.removeChild(todoList)
})

createBtn.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})