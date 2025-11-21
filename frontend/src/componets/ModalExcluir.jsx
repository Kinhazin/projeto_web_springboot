import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button';

function ModalExcluir() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Excluir produto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Deseja excluir o produto?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type='submit' variant="danger">
            excluir
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}

export default ModalExcluir;