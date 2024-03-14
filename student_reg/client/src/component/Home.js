import React from 'react'

export default function Home() {
  return (
    <div className='container mt-5'>
      <h1 className='mt-5 text-center'>Welcome to my MERN Stack Student Registration System!
</h1>
      <br></br>
      <h6 className=' text-center '>
      This application allows you to manage your Student Data/Records efficiently using a MERN stack architecture.
      </h6>
        <br></br>
      <h4 className='text-left' >Here's a breakdown of the technologies used:</h4>
      <br></br>
      <h5 >
      <ul className='text-left' >This system provides functionalities for:</ul>
      <li>Viewing all Students in your records.</li>
      <li>Adding new Students with details like Name,Subject,Address,Contact etc.</li>
      <li>Updating existing Student records to reflect any changes.</li>
      <li>Deleting students from your records when necessary.</li>
      </h5>
    </div>
  )
}
