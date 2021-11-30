import { ChangeEventHandler, MouseEventHandler } from 'react';

type Props = {
  itemName: string;
  //isHidden: boolean;
  //userAdd : string;
  handleHiddenChange: void;
};

const ItemBar = ({
  itemName,
  handleHiddenChange
}: Props) => (
  //<form className="inRow">
  <form className="inRow">
    <p className="itemFormat">{itemName}</p>
    <button
      type="button"
      className='butt'
      onClick={() => handleHiddenChange}
    >View</button>
    <p>
    </p>
  </form >
);

export default ItemBar;