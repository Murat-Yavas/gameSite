import "./gameSectionItem.css";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal-slice";

const GameSectionItem = ({ image, title, text, genre, left }) => {
  const { items } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    const games = items.filter((item) => item.genre === genre);
    dispatch(modalActions.loadGames(games));
    dispatch(modalActions.getGenre(games[0].genre));

    dispatch(modalActions.toggleModal());
  };

  return (
    <div className="section-sub-content">
      <div
        className={`content-image ${left ? "order-1" : "order-1 order-md-2"}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 27, 39, .3), black), 
          url(${image})`,
        }}
      ></div>

      <div
        className={`content-info ${left ? "order-1 order-md-2" : "order-1"}`}
      >
        <h1 className="content-info-title">{title}</h1>
        <p className="content-info-text">{text}</p>
        <Button onClick={handleOpenModal}>Find Out more</Button>
      </div>
    </div>
  );
};

export default GameSectionItem;
