import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    return(
        <ChatEngine 
            height="100vh"
            projectID="7d57ae65-2aac-4db8-8260-8ea379f6a11e"
            userName="Elle"
            userSecret="123123"
            renderChatFeed={(chatAppProps) =>  <ChatFeed  {... chatAppProps} />}
        />
    )
}

export default App;