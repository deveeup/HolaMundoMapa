import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDataUser } from '../../actions/user';
import { ES_TEXTS, EN_TEXTS } from '../../constants';

const Modal = ({ currentPlace }) => {
  const [ namePlace, setNamePlace ] = useState('');
  const info = useSelector(state => state.user);
  const dispatch = useDispatch();
  const addUserData = useCallback(
    userData => dispatch(addDataUser(userData)),
    [dispatch]
  );
  const ES = ES_TEXTS;
  const EN = EN_TEXTS;
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
    <div className="modalContainer">
      <div className="modalContainer-box">
        <p>{info.langEN ? EN.howNamePlace : ES.howNamePlace}</p>
        <input 
          type="text"
          placeholder={info.langEN ? EN.placePlaceholder : ES.placePlaceholder}
          onChange={(e) => setNamePlace(e.target.value)}
        />
        <div>
          <button 
            className="modalContainer-box-confirm"
            onClick={addPlace}
          >
            {info.langEN ? EN.actionButton : ES.actionButton}
          </button>
          <button 
            className="modalContainer-box-cancel"
            onClick={cancel}
          >
            {info.langEN ? EN.cancelButton : ES.cancelButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;