import { useRouter } from 'next/router'
import { useContext } from 'react'
import Layout from '../../components/layout'
import { NoteContext } from '../../context/NoteContext'

const NoteDetails = () => {
	const router = useRouter()
	const { id } = router.query
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('MyComponent must be used within a NoteProvider')
	}
	const { notes } = context

	const note = notes.find(note => note.id === Number(id))

	if (!note) {
		return <div>Note not found</div>
	}

	return (
		<Layout>
			<div>
				<h5>{note.title}</h5>
				<p>{note.description}</p>
			</div>
		</Layout>
	)
}

export default NoteDetails
