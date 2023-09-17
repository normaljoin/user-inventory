import './Header.scss';
import userIcon from '../images/usericon.svg';
import List from '../List/List';

const Header = () => {
  const HeaderTitle = "USER'S INVENTORY";
  const onClickHandler = () => {
    console.log('open user pop up');
  };
  return (
    <>
      <div className="header">
        <p className="text">{HeaderTitle}</p>
        <img className="logo" src={userIcon} alt="User Logo" onClick={onClickHandler} />
      </div>
      <List />
    </>
  );
};

export default Header;
