import React, { useState, useRef } from 'react';
import { FileUpload } from '../AceternityComp/fileUpload';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/TodoSlice';

function AddList({ isActive, setIsActive }) {
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const refTitle = useRef();
    const refDescription = useRef();
    const refPriority = useRef();

    const handleFileUpload = (files) => {
        setFiles(files);
        console.log(files);
    };


    const handleAddTask = () => {
        const title = refTitle.current.value;
        const description = refDescription.current.value;
        const priority = refPriority.current.value;
        if (title && description && priority) {
            dispatch(addTodo({ title: title, description: description, priority: priority }));
            setIsActive(false);
            refTitle.current.value = ''
            refDescription.current.value = ''
            refPriority.current.value = ''

        } else {
            alert("Please fill in all fields.")
        }
    };

    return (
        <div className='pt-10'>
            <div className={`${isActive ? 'w-9/12 z-40' : 'w-0 z-0 opacity-0'} duration-700 bg-slate-100 absolute left-[12.5%]`}>
                <FileUpload onChange={handleFileUpload} />
                <div className='pt-10 grid grid-cols-1 gap-2 w-1/2 mx-auto'>
                    <TextField inputRef={refTitle} name='title' id="filled-basic" label="Title" variant="standard" />
                    <TextField inputRef={refDescription} name='description' id="filled-basic" label="Description" variant="standard" />
                    <TextField inputRef={refPriority} name='priority' type='number' id="filled-basic" label="Priority" variant="standard" />
                    <div className='flex justify-center my-4'>
                        <Button onClick={handleAddTask} variant="contained" sx={{ marginRight: '7px' }}>Save</Button>
                        <Button onClick={() => {
                            setIsActive(false); refTitle.current.value = ''
                            refDescription.current.value = ''
                            refPriority.current.value = ''
                        }} variant="contained" color='error'>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddList;
