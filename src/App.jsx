import './App.css'
import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import UseList from './components/useList/UseList'

function App() {
  const [users,setUser] = useState ([
    {
    id: 1,
    image: "https://picsum.photos/400?random=1",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },
  {
    id: 2,
    image: "https://picsum.photos/400?random=2",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 3,
    image: "https://picsum.photos/400?random=3",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 4,
    image: "https://picsum.photos/400?random=4",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 5,
    image: "https://picsum.photos/400?random=5",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 6,
    image: "https://picsum.photos/400?random=6",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 7,
    image: "https://picsum.photos/400?random=7",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  },{
    id: 8,
    image: "https://picsum.photos/400?random=8",
    fristName: "Asadbek",
    lastName: "A'zamov",
    age: 24,
    from: "Korea",
    job: "Developer",
    gender: "Male"
  }])
  return (
    <div className='App'>
    <Navbar usersLength={users.length}/>
    <main>
     <div className="no-users">
          {users.length === 0 && <h2>No user</h2>}
     </div>
     <UseList users={users}/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
