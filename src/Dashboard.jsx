import React, { useState } from 'react'
import Nav from './Nav/Nav'
import Main from './main/Main'
import History from './history/History'

const Dashboard = () => {
  const [router, setRouter] = useState('#home');
  const [view, setView] = useState('#statics');

  return (
    <main>
        <Nav router={router} setRouter={setRouter} />
        <Main router={router} view={view}/>
        <History />
    </main>
  )
}

export default Dashboard
