import Button from '../../Button/Button';
import './Card.scss';

const Card = ({ name, age, gender, favfood, dob, hobbies }: any) => {
  const date = new Date(dob).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' });
  return (
    <div className="card">
      <div className="card-name">
        <p>{name.toUpperCase()}</p>
        <div
          className="gender-icon"
          style={{ backgroundColor: age > 50 ? 'orange' : age > 25 ? 'purple' : 'green' }}
        ></div>
      </div>
      <div className="card-display">
        <p className="card-data">AGE: {age}</p>
        <p>DOB: {date}</p>
        <p>GENDER: {gender}</p>
        <p>FOOD: {favfood}</p>
        <p>HOBBIES: {hobbies}</p>
      </div>
      <div className="button-container">
        <Button
          button={{
            label: 'DELETE',
            onClick: null,
            color: 'red',
          }}
        />
        <Button
          button={{
            label: 'VIEW',
            onClick: null,
            color: 'blue',
          }}
        />
        <Button
          button={{
            label: 'EDIT',
            onClick: null,
            color: 'blue',
          }}
        />
      </div>
    </div>
  );
};

export default Card;
