package senac.backend.service;

import java.util.List;

import senac.backend.persistence.entities.Produto;

public interface ProdutoService {
    List<Produto> findAll();

    Produto findById(Long id);

    Produto addNew(Produto produto);

    Produto update(Long id, Produto produto);

    Produto delete(Long id);

}
