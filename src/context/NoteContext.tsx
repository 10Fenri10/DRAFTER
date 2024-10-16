// import React from 'react'
// import { createContext, useState } from 'react'
// export const NoteContext = createContext();

// export const NoteProvider = ({children}) => {
//     const [notes, setNotes] = useState([]);

//     const addNote = (newNote) => {
//         setNotes([...notes, newNote]);
//     }

//     const editNote = (id, updatedNote) => {
//         setNotes(prevNotes => {
//             return prevNotes.map(note => {
//               if (note.id === id) {
//                 return { ...note, ...updatedNote };
//               }
//               return note;
//             });
//         });
//     }

//     const deleteNote = (id) => {
//         const updatedNotes =  notes.filter((note) => note.id !== id);
//         setNotes(updatedNotes);
//     }

//     return (
//         <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
//             <div>{children}</div>
//         </NoteContext.Provider>
//     )
// }

import { FC, ReactNode, createContext, useState } from 'react'

interface Note {
	id: string
	[key: string]: any
}

interface NoteContextType {
	notes: Note[]
	addNote: (newNote: Note) => void
	editNote: (id: string, updatedNote: Partial<Note>) => void
	deleteNote: (id: string) => void
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined)

interface NoteProviderProps {
	children: ReactNode
}

export const NoteProvider: FC<NoteProviderProps> = ({ children }) => {
	const [notes, setNotes] = useState<Note[]>([])

	const addNote = (newNote: Note): void => {
		setNotes([...notes, newNote])
	}

	const editNote = (id: string, updatedNote: Partial<Note>): void => {
		setNotes(prevNotes => {
			return prevNotes.map(note => {
				if (note.id === id) {
					return { ...note, ...updatedNote }
				}
				return note
			})
		})
	}

	const deleteNote = (id: string): void => {
		const updatedNotes = notes.filter(note => note.id !== id)
		setNotes(updatedNotes)
	}

	return (
		<NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
			<div>{children}</div>
		</NoteContext.Provider>
	)
}
