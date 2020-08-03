function AsyncDispatch(PromiseFn) {
    async function actionHandler(dispatch) {
        dispatch({type:'LOADING'})
        try {
            const data = await PromiseFn();
           dispatch({type: 'SUCCESS', data})
        } catch(err) {
            console.error(err);
        }
    }
    return actionHandler;
}

export default AsyncDispatch