function Contact() {
    return (
      <div className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-700 mb-4">
          Feel free to connect with me via email or LinkedIn.
        </p>
  
        <ul className="text-blue-600 underline">
          <li>Email: your.email@example.com</li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Contact;