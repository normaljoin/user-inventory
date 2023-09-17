import { useEffect, useState } from 'react';
import './List.scss';
import Card from './Card/Card';
import PopUpMenu from '../PopUpMenu/PopUpMenu';
import Button from '../Button/Button';
import { FormDetails } from './FormDetails';

const List = () => {
  const [addUserPopUp, setUserPopUp] = useState(false);
  const [formHistory, setFormHistory] = useState<FormDetails[]>([
    {
      name: 'Nirmal',
      age: 51,
      dob: new Date('1972-09-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Burger',
      hobbies: 'Cricket',
    },
    {
      name: 'Heyy',
      age: 26,
      dob: new Date('1997-08-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Pasta',
      hobbies: 'Badminton',
    },
    {
      name: 'Normal Join',
      age: 20,
      dob: new Date('2003-08-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Burger',
      hobbies: 'Cricket, Badminton',
    },
    {
      name: 'Normal',
      age: 1,
      dob: new Date('2022-08-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Pizza',
      hobbies: 'Badminton, Cricket',
    },
    {
      name: 'Jain',
      age: 23,
      dob: new Date('2000-08-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Pasta',
      hobbies: 'sdfsdf',
    },
    {
      name: 'Rando',
      age: 10,
      dob: new Date('2013-08-27T18:30:00.000Z'),
      gender: 'Female',
      favfood: 'Burger',
      hobbies: 'Swimming',
    },
    {
      name: 'Ginger',
      age: 21,
      dob: new Date('2002-08-27T18:30:00.000Z'),
      gender: 'Male',
      favfood: 'Burger',
      hobbies: 'Youtube',
    },
  ]);
  useEffect(() => {
    const storedFormHistory = localStorage.getItem('formHistory');
    if (storedFormHistory) {
      setFormHistory(JSON.parse(storedFormHistory));
    }
  }, []);

  // Update localStorage whenever formHistory changes
  useEffect(() => {
    localStorage.setItem('formHistory', JSON.stringify(formHistory));
  }, [formHistory]);

  const onAddUserHandler = () => {
    console.log('add user button');
    setUserPopUp(true);
  };
  return (
    <>
      <div className="list-container">
        <p className="list-text">LIST OF USER</p>
        <Button
          button={{
            label: 'ADD USERS',
            onClick: onAddUserHandler,
            color: 'blue',
          }}
        />
        {addUserPopUp && <PopUpMenu popUpState={setUserPopUp} formDataDetails={setFormHistory} />}
      </div>
      <div className="card-wrapper">
        {formHistory.length &&
          formHistory.map((formData, index) => (
            <Card
              key={index}
              name={formData.name}
              age={formData.age}
              dob={formData.dob}
              gender={formData.gender}
              favfood={formData.favfood}
              hobbies={formData.hobbies}
            />
          ))}
      </div>
    </>
  );
};

export default List;
