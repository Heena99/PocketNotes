import React, { useContext } from 'react'
import styles from "./NoteArea.module.css"
import bgimage from "../../assets/bgimage.png"
import { NotesContext } from '../../context/NoteContext'
import ActiveNoteArea from '../ActiveNoteArea/ActiveNoteArea'

const NoteArea = () => {
  const { activeNote } = useContext(NotesContext);
  return (
    <div className={`${!!activeNote? styles.mainSelected : styles.main}`}>
      {activeNote ? <ActiveNoteArea/> : <div className={styles.middle}>
        <img src={bgimage} alt="background image" />
        <div className={styles.heading}>Pocket Notes</div>
        <div className={styles.text}>Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone</div>
      </div>}
    </div>
  )
}

export default NoteArea