import ItemProduto from "./componets/ItemProduto"
import ModalProduto from "./componets/ModalProduto"
import { useState } from "react"
function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center" style={{ backgroundColor: '#f5e8c6' }}>
        <header className=" d-flex justify-content-center align-content-center w-100 mb-2" style={{ height: '10vh', backgroundColor: '#f4d279' }}>
          <p style={{color: '#6A6357'}} className="fs-3 fw-bold m-0 h-100 d-flex align-items-center justify-content-center">Gerenciador de produtos</p>
        </header>
        <button 
        style={{backgroundColor: '#C1DDC7', color:'#6A6357'}}
        onClick={()=>setShowModal(true)}
        >Incluir produto</button>
          <ItemProduto/>
      </div>
      {showModal && (<ModalProduto 
      show={showModal}
      handleClose={()=>setShowModal(false)}
      />)}
    </>
  )
}

export default App
