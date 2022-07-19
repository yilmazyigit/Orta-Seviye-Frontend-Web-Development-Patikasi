import {  useState} from "react";


function App() {
  const [name, setName] = useState('Yiğit');
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(['Ahmet', 'Murat']);
  const [address, setAddress] = useState({ title: 'Istanbul', zip: 34765 });

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Ahmet')}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
    
      <hr />
      <br></br>

      <h2> Friends</h2>
      {friends.map((friend, index) => (
          <div key={index}>{ friend}</div>
        ))}
    <button onClick={() => setFriends([...friends, "Ayşe"])}>Add new friend</button>
    
    
    <hr />
    <br></br>
   
    <h2>Address</h2>
    <div>{address.title} {address.zip}</div>
    <br/>

    <button onClick={() => setAddress({...address, title: "Ankara" })}>
      Chnage the address
      </button>

   
   
    </div>
  );
}

export default App;
