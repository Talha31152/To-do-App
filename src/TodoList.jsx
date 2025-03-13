import React, { useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

const TodoList = (prop) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(prop.items)
    
    return (
        <div className='mt-4 w-[40%] mx-auto border border-sky-400 p-4 flex justify-between items-center'>

            <div>
                {
                    isEditing ? (
                        <input type='text' value={newValue} className='px-2 py-1 w-[250px]' onChange={e => {
                            setNewValue(e.target.value)
                        }} />
                    ) : (
                        <span>
                            {prop.items}
                        </span>
                    )
                }
            </div>

            <div className='flex gap-2'>
                {isEditing ? (
                    <FaSave
                        className='h-5 w-5 cursor-pointer text-green-500'
                        onClick={() => {
                            prop.editItems(prop.index, newValue)
                            setIsEditing(false)
                        }}
                    />
                ) : (
                    <MdEdit
                        className='h-5 w-5 cursor-pointer text-blue-500'
                        onClick={() => setIsEditing(true)}
                    />
                )}

                <span>
                    <MdDelete className='h-5 w-5 cursor-pointer' onClick={e => {
                        prop.deleteItems(prop.index)
                    }} />
                </span>
            </div>

        </div>
    )
}

export default TodoList