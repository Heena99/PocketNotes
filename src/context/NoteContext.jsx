import { createContext, useEffect, useState } from 'react';

export const NotesContext = createContext("");

const Provider = ({ children }) => {
    const [Notes, setNotes] = useState(JSON.parse(localStorage.getItem("Groups") || "[]"))

    const [activeNote, setActiveNote] = useState("")

    const colors = ['bg-[#B38BFA]', 'bg-[#FF79F2]', 'bg-[#43E6FC]', 'bg-[#F19576]', 'bg-[#0047FF]', 'bg-[#6691FF]']

    const [isVisible, setIsVisible] = useState(false);
    const openModal = () => {
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const addNote = (argtitle, argcolor) => {
        setNotes([...Notes, {
            title: argtitle, 
            color: argcolor, 
            notes: []
        }])
        setIsVisible(false)
    }

    const getInitial = (name) => {
        let temp = name.trim().split(" ");
        let initials=""
        if(temp.length>1){
          initials = temp[0][0].toUpperCase() + temp[1][0].toUpperCase();
        }
        else{
          initials = temp[0][0].toUpperCase();
        }
        return initials;
      }

      useEffect(() => {
        localStorage.setItem("Groups", JSON.stringify(Notes)) 
      }, [Notes]);

    return(
        <NotesContext.Provider value={{openModal, addNote, closeModal, setActiveNote, getInitial, setNotes, Notes, isVisible, colors, activeNote}}>
            {children}
        </NotesContext.Provider>
    )
}

export {Provider}