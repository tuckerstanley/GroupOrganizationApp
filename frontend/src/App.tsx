import logo from './logo.svg';
import React, { ChangeEvent, useState } from 'react';
import FilterableTable from './FilterableTable';
import Authentication from './Authentication';

import './App.css';

//type eventType = "chore" | "event" | "reminder"


const reminder1 = { details: "", displayed: true, title: "Pay dues to Timmy by tomorrow", action: "reminder", user: "Ethan Stanley" }
const reminder2 = { details: "", displayed: true, title: "Go Grocery shopping and buy 2 milks", action: "reminder", user: "Ethan Stanley" }
const reminder3 = { details: "", displayed: true, title: "Rent due to Pat in 5 days", action: "reminder", user: "Ethan Stanley" }
const chore1 = { details: "", displayed: true, title: "Clean bathroom sink and fix shower curtain", action: "chore", user: "Ethan Stanley" }
const chore2 = { details: "", displayed: true, title: "Dishes! Today is Spencer's day", action: "chore", user: "Ethan Stanley" }
const chore3 = { details: "", displayed: true, title: "Need to rake the outdoors", action: "chore", user: "Ethan Stanley" }
const event1 = { details: "", displayed: true, title: "Philanthropy Event on 9/4", action: "event", user: "Ethan Stanley" }
const event2 = { details: "", displayed: true, title: "80's party on the upcoming Friday", action: "event", user: "Ethan Stanley" }

export type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  action: string
  user: string
}

const App = () => {
  const eList: postInfo[] = [event1, event2]
  const rList: postInfo[] = [reminder1, reminder2, reminder3]
  const cList: postInfo[] = [chore1, chore2, chore3]
  const startList3: postInfo[] = []
  const [eventList, setEventList] = useState(eList)
  const [reminderList, setReminderList] = useState(rList)
  const [choreList, setChoreList] = useState(cList)
  const [setPost, makePost] = useState(startList3)

  //setEventList(eventList.concat(post1))

  return (
    <div className="App">
      <Authentication>
        <FilterableTable choreList={choreList} reminderList={reminderList} eventList={eventList} handleClickChange={makePost} />
      </Authentication>
    </div>
  );
}

export default App;

