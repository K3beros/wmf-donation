const db = require('./db');


async function create(donation){
    const result = await db.query(
      `INSERT INTO donations 
      (lastName, firstName, address, city, state, country, postalCode, phoneNumber, email, contact, payment, freqDonation, donationAmount, comments) 
      VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        donation.lastName, donation.firstName, donation.address, donation.city, donation.state,
        donation.country, donation.postalCode, donation.phoneNumber, donation.email, donation.contact, donation.payment, donation.freqDonation, donation.donationAmount, donation.comments
      ]
    );
  
    let message = 'Error in creating donation';
  
    if (result.affectedRows) {
      message = 'Donation created successfully';
    }
  
    return {message};
  }
  
  module.exports = {
    create
  }

  