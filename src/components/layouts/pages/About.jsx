const About = () => {
  return (
    <div>
        <h1 className="text-6xl mb4">GitHub Finder</h1>
        <p className='mb-4 font-light'>
        A React app to search GitHub profiles and see profile details. 
        
        .
      </p>
      <br />
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Refrence From:
        <strong >
          <a className="text-white" href='https://traversymedia.com'> Brad Traversy</a>
        </strong >
      </p>
    </div>
  )
}

export default About