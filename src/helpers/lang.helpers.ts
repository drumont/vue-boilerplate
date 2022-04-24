

function retrieveError(errors: Array<any>, code: number): Array<any> {
    return errors.find(value => value.code == code)
}

export default {
    retrieveError
}
