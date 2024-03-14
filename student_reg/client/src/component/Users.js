import React from 'react'

export default function Users() {
  return (
    
    <div className='container mt-5'>
      <h1 className='mt-5 text-center'>User Details</h1>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <h5 className='mt-5 text-center' >Admin</h5>
          <div class="card shadow">
            <ul class="list-group list-group-flush">
               <button className='btn btn-primary' >Login</button>
            </ul>
          </div>
        </div>
        <div className='col-md-6'>
          <h5 className='mt-5 text-center'>Registered Users</h5>
          <div class="card shadow">
            <ul class="list-group list-group-flush">
                <button className='btn btn-primary'>Login</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
