import Link from 'next/link'
import { FC, useContext } from 'react'
import Layout from '../components/layout'
import { NoteContext } from '../context/NoteContext'
import utilStyles from '../styles/utils.module.css'
import Note from './Note'

const Home: FC = () => {
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('MyComponent must be used within a NoteProvider')
	}

	const { notes, deleteNote, editNote } = context

	const handleDelete = (id: number): void => {
		deleteNote(id)
	}

	const handleEdit = (id: number, updatedNote: Partial<Node>): void => {
		editNote(id, updatedNote)
	}

	return (
		<Layout home>
			<section className={utilStyles.headingMd}>
				<Link href='/posts/AddNote' passHref>
					<button id='add' className='btn btn-outline-dark'>
						Add Note
					</button>
				</Link>
				<br />
				<br />

				<div>
					{notes.map((note: { id: number }) => (
						<div className='col-12 mb-3' key={note.id}>
							<Note note={note} onDelete={handleDelete} onEdit={handleEdit} />
						</div>
					))}
				</div>
			</section>
		</Layout>
	)
}

export default Home
