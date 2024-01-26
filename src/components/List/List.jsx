import React, { useContext, useState } from 'react'
import styles from "./List.module.css"
import { NotesContext } from '../../context/NoteContext'

const List = () => {

  const {Notes, openModal, activeNote, setActiveNote, getInitial} = useContext(NotesContext);

  return (
    <div className={`${activeNote? styles.mainSelected : styles.main}`}>
      <div className={styles.heading}>Pocket Notes</div>
      <div className={styles.list}>
        {Notes.map((item, index) => {
          return (
            <div className={`${activeNote==item? styles.active: ""} ${styles.listItem}`} key={index} onClick={() => {setActiveNote(item)}}>
              <div className={`${styles.icon} ${item.color}`}>{getInitial(item.title)}</div>
              <div className={styles.title}>{item.title}</div>
            </div>
          )
        }
        )}
      </div>
      <div className={styles.addbtn} onClick={openModal}>+</div>
    </div>
  )
}

export default List