import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button';

function ModalExcluir({ show, handleClose, produto, getProdutos }) {

  async function excluirProduto() {
    try {
      const reponse = await fetch(`http://localhost:8080/produtos/${produto.id}`, {
        method: 'DELETE',
      });
      if (!reponse.ok) {
        throw new Error('Erro ao excluir o produto');
      }
      getProdutos();
      handleClose();
      alert('Produto excluído com sucesso');
    } catch (erro) {
      alert('Erro ao excluir o produto')
    }
  }

    return (
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir produto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className='fs-6 mb-0'>Deseja excluir o produto de id {produto.id}</p>
          <p>Nome: {produto.nome}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button 
          onClick={()=>excluirProduto()}
          type='submit' variant="danger">
            excluir
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }


  export default ModalExcluir;