import logo from './logo.svg';
import React, { ChangeEvent, useEffect, useState } from 'react';
import FilterableTable from './FilterableTable';
import Authentication from './Authentication';
import Modal from "./Modal"
import {User} from "firebase/auth";
import './App.css';

//type eventType = "chore" | "event" | "reminder"


const reminder1 = { details: "", displayed: true, title: "Pay dues to Timmy by tomorrow", event: "reminder", user: "Ethan Stanley" }
const reminder2 = { details: "", displayed: true, title: "Go Grocery shopping and buy 2 milks", event: "reminder", user: "Ethan Stanley" }
const reminder3 = { details: "", displayed: true, title: "Rent due to Pat in 5 days", event: "reminder", user: "Ethan Stanley" }
const chore1 = { details: "", displayed: true, title: "Clean bathroom sink and fix shower curtain", event: "chore", user: "Ethan Stanley" }
const chore2 = { details: "", displayed: true, title: "Dishes! Today is Spencer's day", event: "chore", user: "Ethan Stanley" }
const chore3 = { details: "", displayed: true, title: "Need to rake the outdoors", event: "chore", user: "Ethan Stanley" }
const event1 = { details: "", displayed: true, title: "Philanthropy Event on 9/4", event: "event", user: "Ethan Stanley" }
const event2 = { details: "", displayed: true, title: "80's party on the upcoming Friday", event: "event", user: "Ethan Stanley" }

export type postInfo = {
  details: string;
  displayed: boolean;
  event: string
  title: string;
  user: string | undefined;
}

const App = () => {
  const eList: postInfo[] = [event1, event2]
  const rList: postInfo[] = [reminder1, reminder2, reminder3]
  const cList: postInfo[] = [chore1, chore2, chore3]
  const startList3: postInfo[] = []
  const [eventList, setEventList] = useState<postInfo[]>([])
  const [reminderList, setReminderList] = useState<postInfo[]>([])
  const [choreList, setChoreList] = useState<postInfo[]>([])
  const [setPost, makePost] = useState(startList3)
  const [showModal, setShowModal] = useState(false);
  const [buttonPressed, setButton] = useState(false);
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayEvent, setDisplayEvent] = useState('');
  const [displayDetails, setDisplayDetails] = useState('');
  const [modalType, setModalType] = useState("normal")
  const [displayUser, setDisplayUser] = useState<string | undefined>('');
  const InitList: postInfo[] = [];
  const [postList, setPostList] = useState<postInfo[]>([])
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    fetch("/getPosts/")
      .then((res) => res.json())
      .then((data: postInfo[]) => {
        console.log("here")
        setChoreList(data.filter(post => post.event == "Chore"))
        setReminderList(data.filter(post => post.event == "Reminder"))
        setEventList(data.filter(post => post.event == "Event"))
      });
  }, [postList]);
  const openModal = () => {
    setShowModal(prev => !prev);
    setModalType("normal");
  };

  //setEventList(eventList.concat(post1))
  return (
    <div className="App">
      <Authentication 
        user = {user}
        setUser = {setUser}
      >
      <FilterableTable 
        choreList={choreList} 
        reminderList={reminderList} 
        eventList={eventList} 
        handleClickChange={makePost} 
        setShowModal = {setShowModal}
        setDisplayTitle = {setDisplayTitle}
        setDisplayEvent = {setDisplayEvent}
        setModalType = {setModalType}
        setDisplayDetails = {setDisplayDetails}
        setDisplayUser = {setDisplayUser}
      />
        <div className='inRowButton'>
          <button
            className="toggle-button"
            id="centered-toggle-button"
            onClick={openModal}
          >
            {" "}
            New Post{" "}
          </button>
        </div>
        <div className="Modal">
          <Modal
            user = {user?.displayName}
            showModal={showModal}
            setShowModal={setShowModal}
            postList={postList}
            setPostList={setPostList}
            setEventList={setEventList}
            setReminderList={setReminderList}
            setChoreList={setChoreList}
            modalType = {modalType}
            displayTitle = {displayTitle}
            displayEvent = {displayEvent}
            displayDetails = {displayDetails}
            displayUser = {displayUser}
          />
        </div>
      </Authentication>
    </div>
  );
}

export default App;

