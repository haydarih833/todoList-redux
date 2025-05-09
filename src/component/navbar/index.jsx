import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AddList from '../addList';
import { useDispatch } from 'react-redux';
import { deleteAllTodo } from '../../redux/TodoSlice';
function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex justify-around items-center pt-10 mx-auto'>
                {/* <div className='ml-10'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', color: 'white' }}>
                        <TextField id="input-with-sx" label="Search" variant="standard" />
                        <SearchIcon sx={{ ml: 1, my: 0.5 }} />
                    </Box>
                </div> */}
                
                    <Button onClick={() => { setIsActive(true) }} sx={{ marginRight: '10px', width: '15%' }} variant="contained" color='error' ><AddIcon /></Button>
                    <Button className='w-1/3 h-10' variant="contained" onClick={()=>{dispatch(deleteAllTodo())}}>All Delete</Button>
                
            </div>
            <AddList isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}

export default Navbar
