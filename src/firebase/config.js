
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    //sizin bilgileriniz
};

initializeApp(firebaseConfig);

const auth=getAuth();

export {auth}