const db = require('../model/db')
//const config = require('../config')


async function submitDonation(donation) {
    const result = await db.queryDb(
        'INSERT INTO donations (lastName, firstName, address, city, state, country, postalCode, phoneNumber, email, contact, payment, freqDonation, donationAmount, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [donation.lastName, donation.firstName, donation.address, donation.city, donation.state, donation.country, donation.postalCode, donation.phoneNumber, donation.email, donation.contact, donation.payment, donation.freqDonation, donation.amount, donation.comment]
        )
    let message = 'Unsuccessful donation'
    if(result.affectedRows) {
        message = 'Donation successful'
    }
    return message
}

module.exports = {
    submitDonation
}


 