interface IFileUploadAction {
    type: string,
    payload: {
        response: {
            fullSet: boolean,
            shortUri: string
        }
    }
}
export default IFileUploadAction;