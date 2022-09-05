import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider'
import { logOut } from '../../firebase/firebase'
import { User as FirebaseUser } from 'firebase/auth'
import GoogleLogin from '../GoogleLogin/GoogleLogin'
import styles from './Header.module.css'

export const Header = () => {
	const user = useContext(authContext)
	return (
		<div className={styles.Header}>
			<Link to='/'>Home</Link>
			{user ? <UserDropdown user={user} /> : <GoogleLogin />}
		</div>
	)
}

const UserDropdown: React.FunctionComponent<{ user: FirebaseUser }> = ({
	user,
}) => {
	return (
		<>
			<div>{user.displayName}</div>
			<Link to='/profile'>Profile</Link>
			<Logout />
		</>
	)
}

const Logout = () => {
	return (
		<div>
			<button className='' onClick={logOut}>
				sign out
			</button>
		</div>
	)
}
