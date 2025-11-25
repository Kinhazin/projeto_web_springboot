import ItemProduto from "./componets/ItemProduto"
import ModalProduto from "./componets/ModalProduto"

import { useState, useEffect, use } from "react"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [produto, setProduto] = useState(null)


  async function getProdutos() {
    const response = await fetch("http://localhost:8080/produtos")
    const data = await response.json()
    console.log(data)
    setProduto(data)
  }

  useEffect(() => {
    getProdutos()
  }, [])

  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center" style={{ backgroundColor: '#f5e8c6' }}>
        <header className=" d-flex justify-content-center align-content-center w-100 mb-3" style={{ height: '10vh', backgroundColor: '#f4d279' }}>
          <p style={{ color: '#6A6357' }} className="fs-3 fw-bold m-0 h-100 d-flex align-items-center justify-content-center">Gerenciador de produtos</p>
        </header>
        <button
          style={{ backgroundColor: '#C1DDC7', color: '#6A6357' }}
          onClick={() => setShowModal(true)}
        >Incluir produto</button>
        {produto?.length > 0 ? (
          produto.map(produto => (
            <ItemProduto key={produto.id} produto={produto} getProdutos={getProdutos}/>
          ))) : (<h3 className="mt-5" style={{ color: '#6A6357' }}>Nenhum produto cadastrado</h3>)}
        <footer className="mt-auto w-100 text-center p-3 mt-2" style={{ backgroundColor: '#f4d279', color: '#6A6357' }}>
          <p className="m-0">Lucas Amorim Maia</p>
        </footer>
      </div>
      {showModal && (<ModalProduto
        show={showModal}
        handleClose={() => setShowModal(false)}
        getProdutos={getProdutos}
      />)}
    </>
  )
}

export default App
