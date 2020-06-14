import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDataUser } from '../../actions/user';

const Modal = ({ currentPlace }) => {
  const [ namePlace, setNamePlace ] = useState('');
  const info = useSelector(state => state.user);
  const dispatch = useDispatch();
  const addUserData = useCallback(
    userData => dispatch(addDataUser(userData)),
    [dispatch]
  );

  const addPlace = () => {
    addUserData({
      ...info,
      places: [
        ...info.places,
        {
          id: currentPlace.lat-currentPlace.lng,
          name: namePlace,
          lat: currentPlace.lat,
          lng: currentPlace.lng
        }
      ],
      modal: false
    });
  };
  
  
  const cancel = () => {
    return addUserData({
      ...info,
      modal: false
    });
  };
  
  return (
    <div className="ModalContainer">
      <div className="ModalContainer-box">
        <p>¿Cómo se llama este lugar?</p>
        <input 
          type="text"
          placeholder="Hogar"
          onChange={(e) => setNamePlace(e.target.value)}
        />
        <div>
          <button 
            className="ModalContainer-box-confirm"
            onClick={addPlace}
          >
            Agregar
          </button>
          <button 
            className="ModalContainer-box-cancel"
            onClick={cancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;