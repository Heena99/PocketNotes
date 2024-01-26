import React, { useContext, useState } from 'react'
import styles from "./Modal.module.css"
import { NotesContext } from '../../context/NoteContext'

const Modal = () => {
    const { isVisible, colors, addNote, closeModal } = useContext(NotesContext);

    const [input, setInput] = useState("");
    const [choosecolor, setChooseColor] = useState("bg-[#6691FF]")
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value)
        setError(false)
    }

    const createGroup = () => {
        if (input == "") {
            setError(true);
        }
        else {
            addNote(input, choosecolor);
        }
    }

    if (!isVisible) return null;
    else return (
        <div className={styles.background} onClick={closeModal}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.heading}>Create New group</div>
                <div>
                    <div className={styles.inputdiv}>
                        <div className={styles.name}>Group Name</div>
                        <input type="text" placeholder='Enter group name' className={styles.input} onChange={(e) => handleChange(e)} />
                    </div>
                    {error ? <div className={styles.error}>Group Name cannot be empty</div> : ""}
                </div>

                <div className={styles.colordiv}>
                    <div className={styles.name}>Choose colour</div>
                    <div className={styles.choosecolor}>
                        {colors.map((color) => {
                            return (
                                <div className={`${choosecolor == color ? "sm:size-9 size-7" : ""} ${styles.colors} ${color}`} key={color} onClick={() => setChooseColor(color)}></div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn} onClick={createGroup}>Create</button>
                </div>

            </div>
        </div>
    )
}

export default Modal