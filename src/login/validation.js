

const validation = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = 'name required'
    }
    if (!values.email) {
        errors.email = 'email required'
        console.log('nnnn')
    }
    if(!values.password) {
        errors.password = "password required"
    }
    return errors
}

export default validation