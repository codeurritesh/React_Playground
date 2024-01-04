import React,{Fragment} from 'react'
import {Routes ,Route} from 'react-router-dom'
import MainNavigation from './components/MainNavigation/MainNavigation'
import NewQuotes from './components/pages/NewQuotes'
import AllQuotes from './components/pages/AllQuotes'
import ShowQuote from './components/pages/ShowQuote'
const App = () => {
  return (
    <Fragment>
<MainNavigation/>
<main>
  <Routes>
    <Route path='/' element={<AllQuotes/>}/>
    <Route path='/new' element={<NewQuotes/>}/>
    <Route path='/show/:id' element={<ShowQuote/>}/>


  </Routes>
</main>
    </Fragment>

    )
}

export default App