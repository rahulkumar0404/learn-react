export const TabButton = ({ children, onClicked, isSelected }) => {
  return (
    <li>
      <button className={isSelected? 'active': ''} onClick={onClicked}>{children}</button>
    </li>
  );
};
