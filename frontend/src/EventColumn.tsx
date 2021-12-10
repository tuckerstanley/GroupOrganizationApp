import React, { ChangeEvent, useState } from 'react';
import ItemBar from './ItemBar';

//type eventType = "chore" | "event" | "reminder"

type postInfo = {
  details: string;
  displayed: boolean;
  title: string;
  event: string;
  user: string;
}

type Props = {
  evType: string;
  valList: postInfo[];
  //handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
  handleClickChange: React.Dispatch<React.SetStateAction<postInfo[]>>;
}


const EventColumn = ({
  evType, valList, handleClickChange
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
            < ItemBar itemName={title} handleHiddenChange={handleClick(index)} />
            <p></p>
          </div>
        ))
      }
    </div>
  )
}

export default EventColumn;