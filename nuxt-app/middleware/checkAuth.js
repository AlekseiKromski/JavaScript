export default function({store, redirect}){
    const auth = store.getters['auth/isAuth']
    if(!auth){
        redirect('/');
    }
}