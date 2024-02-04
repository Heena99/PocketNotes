import React, { useContext, useEffect, useState, useRef } from 'react'
import { NotesContext } from '../../context/NoteContext'
import styles from "./ActiveNoteArea.module.css"
import back from "../../assets/Back.svg"
import enable from "../../assets/enable.svg"
import disable from "../../assets/disable.svg"

const ActiveNoteArea = () => {

    const { activeNote, getInitial, setActiveNote, setNotes } = useContext(NotesContext)

    const [scroll, setScroll] = useState(false);

    const [newNote, setNewNote] = useState("");
    const noteEndRef = useRef(null)

    const scrollToBottom = () => {
        noteEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [scroll]);

    const goBack = () => {
        setActiveNote("");
    }

    const onType = (e) => {
        setNewNote(e.target.value)
    }

    const handleKeypress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addText();
        }
    };

    const dateFormat = () => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
        const d = new Date();
        const day = Number(d.getHours()) > 11 ? "PM" : "AM";
        let hour =
            Number(d.getHours()) > 12
                ? Number(d.getHours()) - 12
                : Number(d.getHours());
        hour = hour < 10 ? "0" + hour : hour;
        const minute =
            Number(d.getMinutes()) < 10 ? "0" + d.getMinutes() : d.getMinutes();
        const date =
            d.getDate() +
            " " +
            months[d.getMonth()] +
            " " +
            d.getFullYear() +
            " | " +
            hour +
            ":" +
            minute +
            " " +
            day;

        return date;
    }

    const addText = () => {

        setNotes((prev) => {
            return prev.map((item) => {
                if (item.title === activeNote.title) {
                    item.notes.push({
                        message: newNote,
                        date: dateFormat()
                    });
                }
                return item;
            })
        })
        setNewNote("");
        setScroll((prev) => !prev)
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
                            <div className={styles.date}>
                                <span>{item.date.split("|")[0]}</span>
                                <span className={styles.dot}></span>
                                <span>{item.date.split("|")[1]}</span>
                            </div>
                        </div>
                    )
                })}
                <div ref={noteEndRef} />
            </main>
            <footer className={styles.footer}>
                <textarea className={styles.inputtext} placeholder='Enter your text here...........' onChange={(e) => onType(e)} value={newNote} onKeyDown={handleKeypress}>
                </textarea>
                <button className={styles.btn}>{newNote ? <img src={enable} alt='enable' onClick={addText} /> : <img src={disable} alt='disable' />}</button>
            </footer>
        </div>
    )
}

export default ActiveNoteArea