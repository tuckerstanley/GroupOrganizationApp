import React, { ChangeEvent, useState } from 'react';
import EventColumn from './EventColumn';

//type eventType = "chore" | "event" | "reminder"

type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  action: string
  user: string
}

type Props = {
  choreList: postInfo[];
  reminderList: postInfo[];
  eventList: postInfo[];
  handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
}

const FilterableTable = ({
  choreList, reminderList, eventList, handleClickChange
}: Props) => {
  return (
    < div  >
      {
        <div className='inRow' >
          <div className='colInRow' >
            <h2>Chore List</h2>
            <EventColumn evType="chore" valList={choreList} handleClickChange={handleClickChange} />
          </div>
          <div className='colInRow' >
            <h2>Reminder List</h2>
            <EventColumn evType="reminder" valList={reminderList} handleClickChange={handleClickChange} />
          </div>
          <div className='colInRow' >
            <h2>Event List</h2>
            <EventColumn evType="event" valList={eventList} handleClickChange={handleClickChange} />
          </div>
        </div>
      }
    </div >
  )
}
export default FilterableTable;