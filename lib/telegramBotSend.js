import axios from "axios"


export const sendTourRequest = async (obj) => {

  const { destination, type, date, email, phone, numberOfTickets, } = obj

  try {

    const result = await axios.post(`https://api.telegram.org/bot6895856909:AAHCdU5pJsu-zWEE0mT8NQ6WOKELIZUjgaE/sendMessage`, {
      chat_id: '397371054',
      text: `
        New Tour Request from Travel:

        ${email}

        ${phone}

        ${type}

        ${destination}

        ${date}

        number of tickets : ${numberOfTickets}

        `
    })

    return result

  } catch (error) {
    console.error('Error sending object to API:', error);
    throw error;
  }

}

export const sendTourBooking = async (obj, title, price, date) => {

  const { name, email, phone, tickets, message} = obj

  try {

    const result = await axios.post(`https://api.telegram.org/bot6895856909:AAHCdU5pJsu-zWEE0mT8NQ6WOKELIZUjgaE/sendMessage`, {
      chat_id: '397371054',
      text: `
        New Tour Booking from Travel:

        ${title} - $${price}        

        ${date}

        ${name}

        ${email}

        ${phone}

        number of tickets : ${tickets}
        
        ${message}

        `
    })

    return result

  } catch (error) {
    console.error('Error sending object to API:', error);
    throw error;
  }

}