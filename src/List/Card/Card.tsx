import Button from '../../Button/Button';
import './Card.scss';

const Card = ({ formDataValue, onDelete, onView }: any) => {
  const date = new Date(formDataValue.dob).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' });
  return (
    <div className="card">
      <div className="card-name">
        <p>{formDataValue.name.toUpperCase()}</p>
        <div
          className="gender-icon"
          style={{ backgroundColor: formDataValue.age > 50 ? 'orange' : formDataValue.age > 25 ? 'purple' : 'green' }}
        ></div>
      </div>
      <div className="card-display">
        <p className="card-data">AGE: {formDataValue.age}</p>
        <p>DOB: {date}</p>
        <p>GENDER: {formDataValue.gender}</p>
        <p>FOOD: {formDataValue.favfood}</p>
        <p>HOBBIES: {formDataValue.hobbies}</p>
      </div>
      <div className="button-container">
        <Button
          button={{
            label: 'DELETE',
            onClick: () => {
              onDelete(formDataValue);
            },
            color: 'red',
          }}
        />
        <Button
          button={{
            label: 'VIEW',
            onClick: () => {
              onView('View', formDataValue);
            },
            color: 'blue',
          }}
        />
        <Button
          button={{
            label: 'EDIT',
            onClick: () => {
              onView('Edit', formDataValue);
            },
            color: 'blue',
          }}
        />
      </div>
    </div>
  );
};

export default Card;
