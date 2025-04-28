import React from 'react'
import Navbar from './component/navbar'
import AddList from './component/addList'
import ShowList from './component/showList'
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  return (
    <div className=' h-screen bg-slate-400'>
      <Provider store={store}>
        <Navbar />
        <ShowList />
      </Provider>
    </div>
  )
}

export default App
