import React from 'react'

import FireBaseLogin from './Authentication/FireBaseLogin'



const Home = ({currentUser}) => {
  return (
    <div>

      <FireBaseLogin currentUser={currentUser}/>

      </div>
  )
}

export default Home