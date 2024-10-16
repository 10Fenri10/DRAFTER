// import Head from 'next/head';
// import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

// const name = 'MyNote';

// export default function Layout({ children, home }) {
//   return (
//     <div className={styles.container}>
//       <Head>

//       </Head>
//       <header className={styles.header}>
//         {home ? (
//           <>
//             <Image
//               priority
//               src="/images/noteicon.jpg"
//               className={utilStyles.borderCircle}
//               height={144}
//               width={144}
//               alt=""
//             />
//             <h1 className={utilStyles.heading2Xl}>{name}</h1>
//           </>
//         ) : (
//           <>
//             <Link href="/">
//               <Image
//                 priority
//                 src="/images/noteicon.jpg"
//                 className={utilStyles.borderCircle}
//                 height={108}
//                 width={108}
//                 alt=""
//               />
//             </Link>
//             <h2 className={utilStyles.headingLg}>
//               <Link href="/" className={utilStyles.colorInherit}>
//                 {name}
//               </Link>
//             </h2>
//           </>
//         )}
//       </header>
//       <main>{children}</main>
//     </div>
//   );
// }
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const name: string = 'MyNote'

interface LayoutProps {
	children: ReactNode
	home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src='/images/noteicon.jpg'
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=''
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<Image
								priority
								src='/images/noteicon.jpg'
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=''
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/' className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
		</div>
	)
}

export default Layout
