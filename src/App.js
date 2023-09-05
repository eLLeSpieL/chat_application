import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height="100vh"
            projectID="7d57ae65-2aac-4db8-8260-8ea379f6a11e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) =>  <ChatFeed  {...chatAppProps} />}
        />
    )
}

export default App;