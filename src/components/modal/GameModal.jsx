import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./gameModal.css";
import a from "../../assets/image/1.png";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal-slice";

const GameModal = () => {
  const { isShowModal, modalItems, genre } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <Modal id="game-modal" show={isShowModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{genre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalItems?.map((game) => (
          <div className="d-flex flex-column modal-item" key={game.id}>
            <img src={game.thumbnail} />
            <div className="game-desc">
              <p className="game-title">
                <b>
                  <a href={game.game_url} target="_blank">
                    {game.title}
                  </a>
                </b>
              </p>
              <p>{game.short_description}</p>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
