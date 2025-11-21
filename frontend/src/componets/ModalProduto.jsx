import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form"

function ModalProduto({ show, handleClose }) {
    const metodos = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar produtos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='formProduto' onSubmit={metodos.handleSubmit(onSubmit)}>
                    <Form.Group className='mb-2'>
                        <Form.Label>Produto</Form.Label>
                        <Form.Control
                            {...metodos.register('produto')}
                            type='text'
                        />
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>Fabricante</Form.Label>
                        <Form.Control
                            {...metodos.register('fabricante')}
                            type='text'
                        />
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            {...metodos.register('preco')}
                            type='number'
                        />
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            {...metodos.register('descricao')}
                            as={"textarea"}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button type='submit' variant="primary" form='formProduto'>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalProduto;