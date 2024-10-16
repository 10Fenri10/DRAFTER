import { FC } from 'react'
import styles from '../styles/Confirmation.module.css'

interface ConfirmPopupProps {
	isOpen: boolean
	title: string
	message: string
	onConfirm: () => void
	onCancel: () => void
}

const ConfirmPopup: FC<ConfirmPopupProps> = ({
	isOpen,
	title,
	message,
	onConfirm,
	onCancel,
}) => {
	if (!isOpen) return null

	return (
		<div className={styles.confirmDialog}>
			<div className={styles.confirmDialogContent}>
				<h5>{title}</h5>
				<h6>{message}</h6>
				<button
					className='btn btn-danger'
					style={{ marginRight: '10px' }}
					onClick={onConfirm}
				>
					Confirm
				</button>
				<button className='btn btn-outline-dark' onClick={onCancel}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default ConfirmPopup
