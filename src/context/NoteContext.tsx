import { FC, ReactNode, createContext, useState } from 'react'

interface Note {
	id: number
	[key: string]: any
}

interface NoteContextType {
	notes: Note[]
	addNote: (newNote: Note) => void
	editNote: (id: number, updatedNote: Partial<Note>) => void
	deleteNote: (id: number) => void
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

	const editNote = (id: number, updatedNote: Partial<Note>): void => {
		setNotes(prevNotes => {
			return prevNotes.map(note => {
				if (Number(note.id) === id) {
					return { ...note, ...updatedNote }
				}
				return note
			})
		})
	}

	const deleteNote = (id: number): void => {
		const updatedNotes = notes.filter(note => note.id !== id)
		setNotes(updatedNotes)
	}

	return (
		<NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
			<div>{children}</div>
		</NoteContext.Provider>
	)
}
