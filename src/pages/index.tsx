// 'use client'
// import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';
// import Note from './Note';
// import React, { useContext } from 'react';
// import { NoteContext } from '../context/NoteContext';

// export default function Home() {

//   const { notes, deleteNote, editNote } = useContext(NoteContext);

//   const handleDelete = (id) => {
//      deleteNote(id);
//   };

//   const handleEdit = (id, updatedNote) => {
//      editNote(id, updatedNote);
//   };

//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <Link href="/posts/AddNote" passHref>
//             <button id="add" class="btn btn-outline-dark">Add Note</button>
//         </Link>
//         <br></br>
//         <br></br>

//         <div>
//             {notes.map(note => (
//               <div className="col-12 mb-3">
//                 <Note
//                   key={note.id}
//                   note={note}
//                   onDelete={handleDelete}
//                   onEdit={handleEdit}
//                 />
//               </div>
//             ))}
//         </div>
//       </section>

//     </Layout>
//   );
// }

import Link from 'next/link'
import { FC, useContext } from 'react'
import Layout from '../components/layout'
import { NoteContext } from '../context/NoteContext'
import utilStyles from '../styles/utils.module.css'
import Note from './Note'

const Home: FC = () => {
	// const { notes, deleteNote, editNote } = useContext(NoteContext)
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('MyComponent must be used within a NoteProvider')
	}

	const { notes, deleteNote, editNote } = context

	const handleDelete = (id: string): void => {
		deleteNote(id)
	}

	const handleEdit = (id: string, updatedNote: Partial<Node>): void => {
		editNote(id, updatedNote)
	}

	return (
		<Layout home>
			{/* <Head>
				<title>{siteTitle}</title>
			</Head> */}
			<section className={utilStyles.headingMd}>
				<Link href='/posts/AddNote' passHref>
					<button id='add' className='btn btn-outline-dark'>
						Add Note
					</button>
				</Link>
				<br />
				<br />

				<div>
					{notes.map((note: { id: string }) => (
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
