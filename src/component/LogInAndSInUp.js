
import { LogIn } from 'lucide-react';
import React, { useState } from 'react'
import SinUp from './SinUp';

const LogInAndSInUp = ({setLogInUser}) => {
    const [page , setPage] = useState('login');
  return (
    <div>
      {page === "login" ? <LogIn setPage={setPage} setLogInUser={setLogInUser}/> : <SinUp setPage={setPage}/>}
    </div>
  )
}

export default LogInAndSInUp
