import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './PopUpMenu.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { FormDetails } from '../List/FormDetails';

const PopUpMenu = ({ popUpState, formDataDetails }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [formHistory, setFormHistory] = useState<FormDetails[]>([]);
  const [formData, setFormData] = useState<FormDetails>({
    name: '',
    age: 0,
    dob: null,
    gender: '',
    favfood: '',
    hobbies: '',
  });

  const onCloseHandler = () => {
    popUpState(false);
    resetData();
  };

  const resetData = () => {
    setFormData({
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
    // console.log(formData, 'here');
    formDataDetails((prevFormHistory: any) => [...prevFormHistory, formData]);
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
                <input type="text" value={formData.name} id="name" name="name" onChange={handleOnChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="age">AGE</label>
                <input type="number" value={formData.age} id="age" name="age" onChange={handleOnChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <DatePicker
                  required
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
                <select id="favfood" name="favfood" onChange={handleOnChange} value={formData.favfood} required>
                  <option value="">Select an option</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Burger">Burger</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hobbies">HOBBIES</label>
                <textarea id="hobbies" value={formData.hobbies} name="hobbies" onChange={handleOnChange} required />
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
