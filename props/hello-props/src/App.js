import './App.css';

import User from './components/User';

const friends = [
  {
    id: 1,
    name:'Ahmet',
  },
  {
    id:2,
    name: 'Tayfun',
  },
  {
    id: 3,
    name:'Gökhan',
  },
]

function App() {
  return (
    <>
      <User 
      // name="Yiğit" 
      surname="Yılmaz" 
      isLoggedIn={true} 
      age={23} 
      friends={friends}
      address={{
        title: 'Ataşehir/İstanbul',
        zip : 34755
      }}
      /> 
    </>
  );
}

export default App;
