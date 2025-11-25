import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form"

function ModalProdutoEditar({ show, handleClose, getProdutos, produto }) {
    const metodos = useForm();
    metodos.setValue('nome', produto.nome);
    metodos.setValue('fabricante', produto.fabricante);
    metodos.setValue('preco', produto.preco);
    metodos.setValue('quantidadeEstoque', produto.quantidadeEstoque);
    metodos.setValue('descricao', produto.descricao);

    async function onSubmit(data) {

        
        const produtoNovo = {
            nome: data.nome,
            fabricante: data.fabricante,
            preco: parseFloat(data.preco),
            quantidadeEstoque: parseInt(data.quantidadeEstoque),
            descricao: data.descricao
        };

        console.log(produto);

        try {
            const response = await fetch(`http://localhost:8080/produtos/${produto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produtoNovo)
            });

            if (!response.ok) {
                throw new Error('Erro ao editar o produto');
            }
            
            getProdutos();
            handleClose();
            alert('Produto editado com sucesso!');

        } catch (error) {
            alert(error.message);
            return;
        }

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
                            {...metodos.register('nome')}
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
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control
                            {...metodos.register('quantidadeEstoque')}
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
export default ModalProdutoEditar;