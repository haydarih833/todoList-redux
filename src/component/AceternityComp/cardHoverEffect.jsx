
import { Button, Link, TextField } from "@mui/material";
import { cn } from "../utils";
import { AnimatePresence, motion } from "motion/react";
import {  useState } from "react";
// import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/TodoSlice";
export const HoverEffect = ({
  items,
  className
}) => {


  let [hoveredIndex, setHoveredIndex] = useState(null);
  const dispatch = useDispatch()
  let [idEdit, setIdEdit] = useState(null)
  let [textEdit, setTextEdit] = useState({})
  const handleEditClick = (id, currentText) => {
    setIdEdit(id)
    setTextEdit(currentText)
  
  }
  const handleSaveClick = (id) => {
    dispatch(updateTodo({ id, newText:textEdit}))
   setIdEdit(null)
   setTextEdit('')
  }
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>

      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card >
            {idEdit === item.id ?
              <div className="bg-slate-600 rounded-2xl h-full p-2 text-center">
                <TextField  value={textEdit.title} onChange={(e)=>setTextEdit({...textEdit,title:e.target.value})} name='title' id="filled-basic" label="Title" variant="standard" />
                <TextField  value={textEdit.description} onChange={(e)=>setTextEdit({...textEdit,description:e.target.value})} name='description' id="filled-basic" label="Description" variant="standard" />
                <TextField  value={textEdit.priority} onChange={(e)=>setTextEdit({...textEdit,priority:e.target.value})} name='priority' type='number' id="filled-basic" label="Priority" variant="standard" />
            
                <div className='flex justify-center my-4'>
                  <Button onClick={() => handleSaveClick(item.id)} variant="contained" sx={{ marginRight: '7px' }}>Save</Button>
                </div>
              </div>
              :
              <>
                <div className="absolute right-5 w-10 h-10 bg-fuchsia-900 text-white text-xl flex items-center justify-center rounded-3xl">{item.text.priority}</div>
                <CardTitle >{item.text.title}</CardTitle>
                <CardDescription className='mb-4'>{item.text.description}</CardDescription>

                <div className="absolute right-0  flex justify-around  items-center w-20 h-12 pb-4 -my-2">
                  <div className="bg-blue-200 rounded-3xl w-8 h-8 flex items-center justify-center"
                    onClick={() => handleEditClick(item.id, item.text)}
                  ><EditIcon /></div>
                  <div className="bg-red-200 rounded-3xl w-8 h-8 flex items-center justify-center"
                    onClick={() => { dispatch(deleteTodo(item.id)) }}
                  ><CloseIcon /></div>
                </div>
              </>
            }
          </Card>

        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
