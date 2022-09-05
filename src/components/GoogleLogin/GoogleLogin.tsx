import { signInWithGoogle } from '../../firebase/firebase'

const GoogleLogin = () => (
	<div>
		<button className='' onClick={signInWithGoogle}>
			sign in
		</button>
	</div>
)

export default GoogleLogin
