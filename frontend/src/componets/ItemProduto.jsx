import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'

function ItemProduto() {

    return(
    <Card
    className='mt-3'
    text='dark'  
    style={{ width: '35rem', backgroundColor: '#DDD2C3'}}>
        <Card.Body>
            <Card.Title className='mb-1'>Notebook</Card.Title>
            <Card.Subtitle className="mb-1">Fabricante: Asus</Card.Subtitle>
            <Card.Subtitle className="mb-1">Preço: R$ 299,00</Card.Subtitle>
            <Card.Subtitle className="mb-1">Quantidade: 10</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Row className='justify-content-center gap-5'>
                <button className='bg-danger text-light w-25 p-2' style={{height: '40px'}}>Excluir</button>
                <button className='bg-info text-light w-25 p-2' style={{height: '40px'}}>Alterar</button>
            </Row>
            
        </Card.Body>
    </Card>
    )
}
export default ItemProduto;