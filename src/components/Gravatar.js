import React from 'react'
import md5 from 'md5'
// import md5 from 'md5'

function Gravatar (props) {
  const email = props.email;
  // let hash = md5(email);
  const hash =  email
  return (
    <img 
          src={`https://s.gravatar.com/avatar/${hash}?s=80`}
          alt="avatar"
          className={props.className}/>
  )
}

export default Gravatar

// "Badge__avatar"