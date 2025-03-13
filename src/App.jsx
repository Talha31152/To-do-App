import './App.css'
import React, { useState } from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import Swiper from './Swiper'
import SwiperCarousel from './Swiper'

function App() {

  const [todo, setTodo] = useState([])

  let list = (addList) => {
    if (addList !== '')
      setTodo([...todo, addList])
  }

  const deleteListItems = (key) => {
    let newList = [...todo]
    newList.splice(key, 1)
    setTodo([...newList])
  }

    const editListItems = (index, newValue) => {
    let newList = [...todo]
    newList[index] = newValue
    setTodo([...newList])
  }

  return (
    <>
      <Todo addList={list} />
      {
        todo.map((todo, id) => {
          return (
            <TodoList key={id} index={id} items={todo} deleteItems={deleteListItems} editItems={editListItems}/>
          )
        })
      }
      {/* <SwiperCarousel/> */}
    </>
  )
}

export default App
