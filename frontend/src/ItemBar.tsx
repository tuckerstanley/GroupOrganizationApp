import { ChangeEventHandler, MouseEventHandler } from 'react';

type Props = {
  itemName: string;
  itemEvent: string;
  itemDetails : string;
  itemUser : string | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>;
  setDisplayEvent: React.Dispatch<React.SetStateAction<string>>;
  setDisplayDetails: React.Dispatch<React.SetStateAction<string>>;
  setDisplayUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;

  //isHidden: boolean;
  //userAdd : string;
  handleHiddenChange: void;
};

const ItemBar = ({itemName, itemEvent, itemDetails, itemUser, setShowModal, setDisplayTitle, setDisplayEvent, setDisplayDetails, setModalType, setDisplayUser, handleHiddenChange}: Props) => {
  const openModal = () => {
    console.log(itemDetails)
    setShowModal(prev => !prev);
    setDisplayTitle(itemName);
    setDisplayEvent(itemEvent);
    setDisplayDetails(itemDetails);
    setDisplayUser(itemUser);
    setModalType("display")
  };
  return(
    //<form className="inRow">
    <form className="inRow">
      <p className="itemFormat">{itemName}</p>
      <button
        type="button"
        className='butt'
        onClick={openModal}
      >View</button>
      <p>
      </p>
    </form >
  );
  }

export default ItemBar;