
import "./ListMenu.css";

const ListeMenu = (props) => {
  return (
    <ul className="ListeMenu">
      {props.sendEntries.map((value, index) => {
        return (
          <li
            /* Un event event ne peut pas etre directement conditionné  */
            onClick={
              value.entry === "Article" ? props.handleDisplayArticle : null
            }
          >
            {value.entry}
          </li>
        );
      })}
    </ul>
  );
};

export default ListeMenu;
