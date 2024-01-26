import './App.css'
import List from './components/List/List'
import Modal from './components/Modal/Modal'
import NoteArea from './components/NoteArea/NoteArea'

function App() {

  return (
    <div className='h-screen w-screen flex overflow-hidden'>
      <List/>
      <NoteArea/>
      <Modal/>
    </div>
  )
}

export default App

