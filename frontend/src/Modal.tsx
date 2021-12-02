import React, { ChangeEvent, useState } from 'react';
import "./modal.css";

export type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  event: string
}

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  postList: postInfo[];
  setPostList: React.Dispatch<React.SetStateAction<postInfo[]>>;
  setEventList :React.Dispatch<React.SetStateAction<postInfo[]>>;
  setReminderList :React.Dispatch<React.SetStateAction<postInfo[]>>;
  setChoreList :React.Dispatch<React.SetStateAction<postInfo[]>>;
};

const Modal = ({showModal, setShowModal, postList, setPostList, setEventList,setReminderList,setChoreList}:ModalProps) => {

  const [title, setTitleModal] = useState('');
  const [event, setTypePostModal] = useState('');
  const [displayed, setDisplayed] = useState(true);
  const [details, setPostContentsModal] = useState('');

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>){
    setTitleModal(event.target.value);
  }

  function handleChangeType(event: ChangeEvent<HTMLInputElement>){
    setTypePostModal(event.target.value);
  }

  function handleChangeContents(event: ChangeEvent<HTMLTextAreaElement>){
    setPostContentsModal(event.target.value);
  }

  const closeModal = () => {
    setShowModal(prev => !prev);
    setTitleModal("")
    setTypePostModal("")
    setPostContentsModal("")
    console.log("Here")
    const newPost = { details, displayed, event, title};
    fetch('/createPost', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.text())
      .then((data) => {
        setPostList(postList.concat({details: details, displayed: true, title: title, event: event}))
        console.log("here2")
      });

  };
  return (<>{showModal ? 
    <div className = "modal" id = "modal">
      <h2>
        <input className = "input" type="text" placeholder="**Insert Title**" value={title} onChange={handleChangeTitle} />
      </h2>
      <div className="content">
        <div className='inRow' >
          <b>Type</b>
          <input className = "input" type="text" value={event} onChange={handleChangeType} />
        </div>
        <br></br>
        <div className='inRow' >
          <b>Description</b>
          <textarea className = "input2" value={details} onChange={handleChangeContents} />
        </div>
      </div>
      <div className="actions">
          <button className="toggle-button" onClick={closeModal}>
            Submit Post
          </button>
        </div>

    </div> 
    
    : null}</>);
};


export default Modal;