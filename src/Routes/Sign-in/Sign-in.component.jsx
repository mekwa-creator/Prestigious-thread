import {signInWithGooglepopup} from '../../utilis/Firebase/Firebase.utilis'
import { createuserDocumentfromAuth } from '../../utilis/Firebase/Firebase.utilis';

const SignIn = () => {
    const logGoogleuser = async () => {
        const {user} = await signInWithGooglepopup();
     const userDocRef = await   createuserDocumentfromAuth(user);
    }
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleuser}>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn
