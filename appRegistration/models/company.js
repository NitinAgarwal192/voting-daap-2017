const Comp = require('../schema/company')

const company = (data) => {
            return new Comp({
                companyId: data.attributes.companyId,
                companyName: data.attributes.companyName,
                publicKey: data.attributes.publicKey,
                other: data.attributes.other,
                })
                .save()
                .then((newUser) => {
                    return { response: 'Successfully Registered' }
                })     
}

module.exports.company = company