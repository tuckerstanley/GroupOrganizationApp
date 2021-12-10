import React, { ChangeEvent, useState } from 'react';
import ItemBar from './ItemBar';

//type eventType = "chore" | "event" | "reminder"

type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  event: string;
  user: string | undefined;
}

type Props = {
  evType: string;
  valList: postInfo[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>;
  setDisplayEvent: React.Dispatch<React.SetStateAction<string>>;
  setDisplayDetails: React.Dispatch<React.SetStateAction<string>>;
  setDisplayUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;

  //handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
  handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
}


const EventColumn = ({
  evType, valList, setShowModal, setDisplayTitle, setDisplayEvent, setDisplayDetails, setDisplayUser, setModalType, handleClickChange
}: Props) => {
  const handleClick = (index: number) => {
    valList[index].displayed = !valList[index].displayed
    handleClickChange(valList)
  }

  return (
    <div>
      {
        valList.map(({ details, displayed, title, event, user }, index) => (
          <div>
            < ItemBar 
              itemName={title} 
              itemEvent ={event}
              itemDetails = {details}
              itemUser = {user}
              handleHiddenChange={handleClick(index)} 
              setShowModal = {setShowModal}
              setDisplayTitle = {setDisplayTitle}
              setDisplayEvent = {setDisplayEvent}
              setDisplayDetails = {setDisplayDetails}
              setDisplayUser = {setDisplayUser}
              setModalType = {setModalType}
              />
            <p></p>
          </div>
        ))
      }
    </div>
  )
}

export default EventColumn;