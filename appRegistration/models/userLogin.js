const User = require('../schema/user')

const userAuth = (data) => {
    return User.findOne({publicToken: data.attributes.publicToken, companyId: data.attributes.companyId})
        .then((currentUser) => {
            if (currentUser) {
                return { response: 'Valid User' }
            } else {
                return { response: 'InValid User' }
            }
        })
}

module.exports.userAuth = userAuth