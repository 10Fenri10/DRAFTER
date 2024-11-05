import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import ConfirmPopup from './ConfirmPopup'

interface NoteProps {
	note: {
		id: number
		title?: string
		description?: string
	}
	onDelete: (id: number) => void
	onEdit: (id: number, updatedNote: Partial<Node>) => void
}

const Note: FC<NoteProps> = ({ note, onDelete }) => {
	const router = useRouter()
	const { id, title, description } = note || {}

	const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
	const [noteToDelete, setNoteToDelete] = useState<number | null>(null)

	const handleDeleteClick = (
		e: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => {
		e.stopPropagation()
		setNoteToDelete(id)
		setIsConfirmOpen(true)
	}

	const handleConfirm = () => {
		if (noteToDelete) {
			onDelete(noteToDelete)
		}
		setIsConfirmOpen(false)
	}

	const handleCancel = () => {
		setIsConfirmOpen(false)
	}

	const handleNoteClick = () => {
		router.push(`/notes/${id}`)
	}

	return (
		<>
			<div
				className={`card border-dark mb-3`}
				style={{ maxWidth: '18rem' }}
				onClick={handleNoteClick}
			>
				<div
					className={
						'card-body d-flex justify-content-between align-items-center'
					}
				>
					<div>
						<h5 className='card-title'>{title}</h5>
						<h6
							className='card-text container'
							style={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								maxWidth: '200px',
							}}
						>
							{description}
						</h6>
					</div>
					<div>
						<button
							className='btn me-2 text-danger'
							onClick={e => handleDeleteClick(e, id)}
							style={{ backgroundColor: 'none', fontSize: '1rem' }}
						>
							<FaTrash style={{ fontSize: '1rem' }} />
						</button>

						<button
							className='btn text-primary'
							onClick={e => {
								e.stopPropagation()
								router.push(`/notes/edit/${id}`)
							}}
							style={{ backgroundColor: 'none' }}
						>
							<FaEdit style={{ fontSize: '1rem' }} />
						</button>
					</div>
				</div>
			</div>
			<ConfirmPopup
				isOpen={isConfirmOpen}
				title='Delete Note'
				message='Are you sure you want to delete this note?'
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		</>
	)
}

export default Note
