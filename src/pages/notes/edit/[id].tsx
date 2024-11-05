import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Layout from '../../../components/layout'
import { NoteContext } from '../../../context/NoteContext'

const EditNotePage = () => {
	const router = useRouter()
	const { id } = router.query
	console.log(typeof id)
	const NumId = Number(id)
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('MyComponent must be used within a NoteProvider')
	}
	const { notes, editNote } = context

	const note = notes.find(note => Number(note.id) === Number(id))

	const [updatedTitle, setUpdatedTitle] = useState(note?.title)
	const [updatedDescription, setUpdatedDescription] = useState(
		note?.description
	)

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setUpdatedTitle(e.target.value)
	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setUpdatedDescription(e.target.value)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (typeof id === 'string') {
			editNote(NumId, {
				title: updatedTitle,
				description: updatedDescription,
			})
		}
		router.push(`/notes/${id}`)
	}

	return (
		<Layout>
			<br></br>
			<h5>Edit your note</h5>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						value={updatedTitle}
						onChange={handleTitleChange}
						style={{ width: '100%', height: '30px' }}
					/>
				</label>
				<br></br>
				<br></br>
				<label>
					Description:
					<br></br>
					<textarea
						value={updatedDescription}
						onChange={handleDescriptionChange}
						style={{ width: '500px', height: '200px' }}
					/>
				</label>
				<br></br>
				<br></br>
				<button type='submit' className='btn btn-outline-dark'>
					Save
				</button>
			</form>
		</Layout>
	)
}

export default EditNotePage
