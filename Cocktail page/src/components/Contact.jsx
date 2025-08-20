import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact-section">
        <form action="https://formsubmit.co/05f67182e614be2524937bbd31e6abfa" method='POST' className='contact-form'>
            <h1>Contact Me</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name'/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name='lastname' id='lastname'/>
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
            <button type='submit' className='send-btn'>Send</button>
        </form>
    </div>
  )
}

export default Contact