import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";

const Todo = (prop) => {

    const [value, setValue] = useState('')


    return (
        <main>
            <div className='mt-[40px] w-[40%] mx-auto flex flex-col  space-y-4'>
                <div className='flex items-center gap-6'>
                    <input type="text" placeholder='Enter your todo' value={value} className='outline border rounded-lg py-1 px-2' onChange={(e) => {
                        setValue(e.target.value)
                    }} />
                    <button className='border rounded-full h-6 w-6 cursor-pointer'
                        onClick={() => {
                            prop.addList(value)
                            setValue("")
                        }}>+</button>
                </div>
                <p>TODO</p>
                <hr />

            </div>
        </main>
    )
}

export default Todo