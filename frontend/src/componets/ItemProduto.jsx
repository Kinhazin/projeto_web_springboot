import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import ModalExcluir from './ModalExcluir';
import ModalProdutoEditar from './ModalProdutoEditar';
import { useState } from 'react';

function ItemProduto({ produto, getProdutos }) {
    const [showModalExcluir, setShowModalExcluir] = useState(false)
    const [showModalEditar, setShowModalEditar] = useState(false)

    return (
        <Card
            className='mt-3'
            text='dark'
            style={{ width: '35rem', backgroundColor: '#DDD2C3' }}>
            <Card.Body>
                <Card.Title className='mb-1'>{produto.nome}</Card.Title>
                <Card.Subtitle className="mb-1">{produto.fabricante}</Card.Subtitle>
                <Card.Subtitle className="mb-1">R$ {produto.preco}</Card.Subtitle>
                <Card.Subtitle className="mb-1">Quantidade: {produto.quantidadeEstoque}</Card.Subtitle>
                {produto.quantidadeEstoque <= 3 && (
                    <Card.Subtitle className="mb-2 text-danger">Estoque baixo!</Card.Subtitle>
                )}
                <Card.Text>
                    {produto.descricao}
                </Card.Text>
                <Row className='justify-content-center gap-5'>
                    <button
                        onClick={() => setShowModalExcluir(true)}
                        className='bg-danger text-light w-25 p-2' style={{ height: '40px' }}>Excluir</button>
                    <button
                    onClick={()=>setShowModalEditar(true)}
                        className='bg-info text-light w-25 p-2' style={{ height: '40px' }}>Alterar</button>
                </Row>
            </Card.Body>
            {showModalExcluir && (<ModalExcluir
                getProdutos={getProdutos}
                show={showModalExcluir}
                handleClose={() => setShowModalExcluir(false)}
                produto={produto}
            />)}

            {showModalEditar && (<ModalProdutoEditar
                getProdutos={getProdutos}
                show={showModalEditar}
                handleClose={() => setShowModalEditar(false)}
                produto={produto}
            />)

            }
        </Card>
    )

}
export default ItemProduto;