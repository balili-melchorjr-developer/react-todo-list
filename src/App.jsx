import './App.css'
import MyButtonComponent from './components/MyButtonComponent'

const MyButton = () => {
  return <button>My Button</button>
}

function App() {
  const cities = ['Manila', 'Cebu City', 'Bacolod', 'Davao City']
  const newCities = cities.filter(city => city !== 'Davao City')

  const person = [
    {
      id: 0,
      name: 'Justin Espinosa',
      age: 23
    },
    {
      id: 1,
      name: 'Paul Lucero',
      age: 40
    },
    {
      id: 2,
      name: 'Sam Aclan',
      age: 13
    },
    {
      id: 3,
      name: 'Christian Puerto',
      age: 23
    },
    {
      id: 4,
      name: 'Ralph Espinosa',
      age: 28
    }
  ]




    
  return (
    <>
     <ul className="list-group">
      {newCities.map((city, index) => (
        <li className='list-group-item' key={index}>
          {city}
        </li>
      ))}
    </ul>
    <hr/>
    <MyButton/>
    <hr/>
    <h1>Table</h1>
    {person.length > 0 && 
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody>
          {person.map(data => {
            return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age < 20 ? 'Young': 'Old'}</td>
              </tr>
            )
          })}            
          </tbody>
        </table>
      </div>
    }

    </>
  )
}

export default App
