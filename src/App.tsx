import './App.css';
import MyDocument from './ui/document/MyDocument';
import Form from './ui/form/Form';

function App() {
  return (
    <div className="flex h-screen">
      <MyDocument/>
      <Form />
    </div>
  );
}

export default App;
