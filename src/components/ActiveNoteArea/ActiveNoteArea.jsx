import React, { useContext, useEffect, useState, useRef } from 'react'
import { NotesContext } from '../../context/NoteContext'
import styles from "./ActiveNoteArea.module.css"
import back from "../../assets/Back.svg"
import enable from "../../assets/enable.svg"
import disable from "../../assets/disable.svg"

const ActiveNoteArea = () => {

    const { activeNote, getInitial, setActiveNote, setNotes } = useContext(NotesContext)

    const [newNote, setNewNote] = useState("");
    const noteEndRef = useRef(null)

    const scrollToBottom = () => {
        noteEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(() => {
        scrollToBottom()
      }, [newNote]);

    const goBack = () => {
        setActiveNote("");
    }

    const onType = (e) => {
        setNewNote(e.target.value)
    }

    const addText = () => {
        setNotes((prev) => {
            return prev.map((item) => {
                if(item.title === activeNote.title){
                    item.notes.push({
                        message: newNote,
                        date: new Date().toLocaleString() + ""
                    });
                }
                return item;
            })
        })
        setNewNote("");

    }

    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.back} onClick={goBack}><img src={back} alt="back" /></div>
                <div className={`${styles.icon} ${activeNote.color}`}>{getInitial(activeNote.title)}</div>
                <div className={styles.title}>{activeNote.title}</div>
            </header>
            <main className={styles.maintext}>
                {activeNote.notes.map((item) => {
                    return (
                        <div className={styles.noteItem} key={Math.random()}>
                            <div>{item.message}</div>
                            <div className={styles.date}>{item.date}</div>
                        </div>
                    )
                })}
                <div ref={noteEndRef} />
            </main>
            <footer className={styles.footer}>
                <textarea className={styles.inputtext} placeholder='Enter your text here...........' onChange={(e) => onType(e)} value={newNote}>
                </textarea>
                <button className={styles.btn}>{newNote ? <img src={enable} alt='enable' onClick={addText} /> : <img src={disable} alt='disable' />}</button>
            </footer>
        </div>
    )
}

export default ActiveNoteArea