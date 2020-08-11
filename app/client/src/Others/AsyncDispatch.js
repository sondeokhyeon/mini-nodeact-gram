function AsyncDispatch(PromiseFn) {
    async function actionHandler(dispatch, args) {
        dispatch({type:'LOADING'})
        try {
            const data = await PromiseFn(args);
           dispatch({type: 'SUCCESS', data})
        } catch(err) {
            console.error(err);
        }
    }
    return actionHandler;
}

export default AsyncDispatch