package senac.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import senac.backend.persistence.repository.ProdutoRepository;
import senac.backend.persistence.entities.Produto;


@Service
public class ProdutoServiceJPA implements ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto findById(Long id) {
        return produtoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado com id: " + id));
    }

    @Override
    @Transactional
    public Produto addNew(Produto produto) {
       return produtoRepository.save(produto);
    }

    @Override
    public Produto update(Long id, Produto produtoUpdate) {
       Produto produto = produtoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado com id: " + id));

        produto.setNome(produtoUpdate.getNome());
        produto.setFabricante(produtoUpdate.getFabricante());
        produto.setPreco(produtoUpdate.getPreco());
        produto.setQuantidadeEstoque(produtoUpdate.getQuantidadeEstoque());
        produto.setDescricao(produtoUpdate.getDescricao());
        return produtoRepository.save(produto);
    }

    @Override
    public Produto delete(Long id) {
        Produto produto = produtoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado com id: " + id));
        produtoRepository.delete(produto);
        return produto;
    }

}
