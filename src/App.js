import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import firebase from "firebase";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    //for rendering  data from firestore
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://scontent.fdac25-1.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=YL28HJZEDMcAX99ETS4&_nc_ht=scontent.fdac25-1.fna&oh=c856dcb78d5c3c6e8a7c7ca8ae60d241&oe=5F8C19B3"
        alt=""
      />
      <h1>This is a clone of the messenger app</h1>
      <h2>Welcome {userName} </h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a Message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
