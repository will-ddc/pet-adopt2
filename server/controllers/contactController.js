const Contact = require('../models/contact')

module.exports = {
  async received (req, res) {
    try {
      const newContact = await Contact.create(req.body)
      newContact.save()
      res.status(200).json({
        msg: `Thank You ${req.body.name}, we have received your request and will send a response to ${req.body.email} within 24 hours`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  },
  async getAllContacts (req, res) {
    try {
      const contacts = await Contact.find()
      res.status(200).json({
        contacts: contacts
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured, please try again'
      })
    }
  }
}
