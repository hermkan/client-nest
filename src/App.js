import { useEffect, useState } from "react";
import axios from "axios";
// const API_URL = "http://localhost:8000/messages";
const API_URL_PROD = "messages";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchMessage = async () => {
    try {
      setLoading(false)
    const {data} = await axios.get(API_URL_PROD);
    setMessages(data);
    setLoading(true)
    console.log(data);
    } catch (error) {
      console.log(error);
    }  
  };
  useEffect(() => {
 
  }, []);

  return (
    <div>
      <button onClick={fetchMessage}>messages</button>
      <ul>
     {loading ? 
      messages.map((message) => {
        return <li key={message.id}>{message.content}</li>;
      })
    : <div>No new messages</div>
    }
      
    </ul>
    </div>
  );
}

export default App;






