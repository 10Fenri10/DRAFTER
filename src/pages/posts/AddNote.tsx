import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../../components/layout'
import { NoteContext } from '../../context/NoteContext'
import utilStyles from '../../styles/utils.module.css'

interface NewNote {
	id: number
	title: string
	description: string
}

const AddNote: React.FC = () => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('MyComponent must be used within a NoteProvider')
	}

	const { addNote } = context
	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		const newNote: NewNote = {
			id: Math.random(),
			title: title,
			description: description,
		}
		addNote(newNote)
		setTitle('')
		setDescription('')
	}

	const showSuccessNotification = (): void => {
		toast.success('Success!', {
			position: 'top-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	}

	return (
		<Layout>
			<Head>
				<title>Add Note</title>
				{/* <script src='https://maxcdn.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.min.js'></script> */}
			</Head>
			<section>
				<h4>Add Note</h4>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='title'>Title:</label>
						<br />
						<input
							style={{ width: '300px', height: '30px' }}
							type='text'
							id='title'
							name='title'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='description'>Description:</label>
						<br />
						<textarea
							style={{ width: '500px', height: '200px' }}
							id='description'
							name='description'
							value={description}
							onChange={e => setDescription(e.target.value)}
						></textarea>
					</div>

					<div>
						<button
							type='submit'
							className={`${utilStyles.button} edit btn btn-outline-dark`}
							style={{ marginRight: '10px' }}
							onClick={showSuccessNotification}
						>
							Submit
						</button>
						<ToastContainer />
						<Link href='/' passHref>
							<button
								className='btn btn-outline-dark'
								style={{ marginTop: '10px' }}
							>
								Go back to homepage
							</button>
						</Link>
					</div>
				</form>
			</section>
		</Layout>
	)
}

export default AddNote
