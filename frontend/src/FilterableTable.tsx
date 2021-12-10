import React, { ChangeEvent, useState } from 'react';
import EventColumn from './EventColumn';

//type eventType = "chore" | "event" | "reminder"
/*
        buttonPressed = {buttonPressed}
        setButton = {setButton}
        setDisplayTitle = {setDisplayTitle}
        setDisplayEvent = {setDisplayEvent}
        setDisplayDetails = {setDisplayDetails}
*/
type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  event: string;
  user: string | undefined;
}

type Props = {
  choreList: postInfo[];
  reminderList: postInfo[];
  eventList: postInfo[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>;
  setDisplayEvent: React.Dispatch<React.SetStateAction<string>>;
  setDisplayDetails: React.Dispatch<React.SetStateAction<string>>;
  setDisplayUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
}

const FilterableTable = ({
  choreList, reminderList, eventList, setShowModal, setDisplayTitle, setDisplayEvent, setDisplayDetails, setDisplayUser, setModalType, handleClickChange
}: Props) => {
  return (
    < div  >
      {
        <div className='inRow' >
          <div className='colInRow' >
            <h2>Chore List</h2>
            <EventColumn
              evType="chore"
              valList={choreList}
              handleClickChange={handleClickChange}
              setShowModal={setShowModal}
              setDisplayTitle={setDisplayTitle}
              setDisplayEvent={setDisplayEvent}
              setDisplayDetails={setDisplayDetails}
              setDisplayUser={setDisplayUser}
              setModalType={setModalType}
            />
          </div>
          <div className='colInRow' >
            <h2>Reminder List</h2>
            <EventColumn
              evType="reminder"
              valList={reminderList}
              handleClickChange={handleClickChange}
              setShowModal={setShowModal}
              setDisplayTitle={setDisplayTitle}
              setDisplayEvent={setDisplayEvent}
              setDisplayDetails={setDisplayDetails}
              setDisplayUser={setDisplayUser}
              setModalType={setModalType}
            />
          </div>
          <div className='colInRow' >
            <h2>Event List</h2>
            <EventColumn
              evType="event"
              valList={eventList}
              handleClickChange={handleClickChange}
              setShowModal={setShowModal}
              setDisplayTitle={setDisplayTitle}
              setDisplayEvent={setDisplayEvent}
              setDisplayDetails={setDisplayDetails}
              setDisplayUser={setDisplayUser}
              setModalType={setModalType}
            />
          </div>
        </div>
      }
    </div >
  )
}
export default FilterableTable;