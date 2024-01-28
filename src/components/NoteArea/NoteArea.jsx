import React, { useContext } from 'react'
import styles from "./NoteArea.module.css"
import bgimage from "../../assets/bgimage.png"
import { NotesContext } from '../../context/NoteContext'
import ActiveNoteArea from '../ActiveNoteArea/ActiveNoteArea'
import lock from '../../assets/lock.svg'

const NoteArea = () => {
  const { activeNote } = useContext(NotesContext);
  return (
    <div className={`${!!activeNote ? styles.mainSelected : styles.main}`}>
      {activeNote ? <ActiveNoteArea /> : <div className={styles.middle}>
        <img src={bgimage} alt="background image" />
        <div className={styles.heading}>Pocket Notes</div>
        <div className={styles.text}>Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </div>
      </div>
      }
      {activeNote? "": <div className={styles.encryption}>
          <div className={styles.bottom}>
            <img src={lock} alt="lock symbol" />
            <div>end-to-end encrypted</div>
          </div>
        </div>}
    </div>
  )
}

export default NoteArea