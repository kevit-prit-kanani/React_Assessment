import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/ui/Home'
import About from './components/ui/About'
import { Layout } from './Layout'
import { SimpleCounter } from './components/counter/counter'
import { ReduxCounter } from './components/counter/ReduxCounter'
import { PostsPage } from './components/posts/Postspage'
import { LoginForm } from './components/ui/LoginPage'
import { ToggleParagraph } from './components/ui/Toggle'

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='simpleCounter' element={<SimpleCounter />} />
          <Route path='reduxCounter' element={<ReduxCounter />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='postsPage' element={<PostsPage />} />
          <Route path='loginForm' element={<LoginForm />} />
          <Route path='toggle' element={<ToggleParagraph />} />
        </Route>
      </Routes>
    </div>
  )

}

export default App