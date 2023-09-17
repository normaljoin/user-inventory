import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './PopUpMenu.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { FormDetails } from '../List/FormDetails';

const PopUpMenu = ({ popUpState, formDataDetails, selectedCard, state, editHandler, totalLength }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(selectedCard.dob || null);
  const [formData, setFormData] = useState<FormDetails>(
    selectedCard || {
      id: 0,
      name: '',
      age: 0,
      dob: null,
      gender: '',
      favfood: '',
      hobbies: '',
    },
  );

  const onCloseHandler = () => {
    resetData();
    popUpState(false);
  };

  const resetData = () => {
    setFormData({
      id: 0,
      name: '',
      age: 0,
      dob: null,
      gender: '',
      favfood: '',
      hobbies: '',
    });
    setSelectedDate(null);
  };

  const handleOnChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (state) {
      editHandler(formData);
    } else {
      const newFormData = {
        ...formData,
        id: totalLength + 1,
      };
      formDataDetails((prevFormHistory: any) => [...prevFormHistory, newFormData]);
    }
    onCloseHandler();
  };
  return (
    <>
      <div className="modal">
        <div onClick={onCloseHandler} className="overlay" />
        <div className="modal-content">
          <h2 className="add-user">ADD USER</h2>
          <form className="input-form" onSubmit={onSubmitHandler}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  id="name"
                  name="name"
                  onChange={handleOnChange}
                  disabled={!state}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">AGE</label>
                <input
                  disabled={!state}
                  type="number"
                  value={formData.age}
                  id="age"
                  name="age"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <DatePicker
                  required
                  disabled={!state}
                  selected={selectedDate}
                  onChange={date => {
                    setSelectedDate(date);
                    setFormData({
                      ...formData,
                      ['dob']: date,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">GENDER</label>
                <div className="radio-group">
                  <input
                    type="radio"
                    disabled={!state}
                    id="male"
                    checked={formData.gender === 'Male'}
                    name="gender"
                    value="Male"
                    onChange={handleOnChange}
                    required
                  />
                  <label className="radio-label" htmlFor="male">
                    Male
                  </label>
                  <input
                    type="radio"
                    disabled={!state}
                    id="female"
                    checked={formData.gender === 'Female'}
                    name="gender"
                    value="Female"
                    onChange={handleOnChange}
                    required
                  />
                  <label className="radio-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="favfood">FAVOURITE FOOD</label>
                <select
                  id="favfood"
                  name="favfood"
                  onChange={handleOnChange}
                  disabled={!state}
                  value={formData.favfood}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Burger">Burger</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hobbies">HOBBIES</label>
                <textarea
                  disabled={!state}
                  id="hobbies"
                  value={formData.hobbies}
                  name="hobbies"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="btn-container">
              <Button
                className="close-modal"
                button={{
                  label: 'CANCEL',
                  onClick: onCloseHandler,
                  color: 'red',
                }}
              />
              <Button
                type="submit"
                className="close-modal"
                button={{
                  label: 'SUBMIT',
                  onClick: null,
                  color: 'blue',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUpMenu;
