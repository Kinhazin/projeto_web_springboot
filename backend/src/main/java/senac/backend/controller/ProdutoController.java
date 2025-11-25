package senac.backend.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import jakarta.validation.Valid;
import senac.backend.persistence.entities.Produto;
import senac.backend.service.ProdutoServiceJPA;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    ProdutoServiceJPA produtoService;

    @GetMapping
    public List<Produto> getAllProdutos(){
        return produtoService.findAll();
    }

 
    @PostMapping
    public ResponseEntity<?> addNew(@RequestBody @Valid Produto produto) {
    Produto novoProduto = produtoService.addNew(produto);
    URI location = ServletUriComponentsBuilder
        .fromCurrentRequestUri()
        .path("/{id}")
        .buildAndExpand(novoProduto.getId())
        .toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> updateProduto(@RequestBody @Valid Produto produto, @PathVariable Long id) {
        Produto produtoAtualizado = produtoService.findById(id);
        if(produtoAtualizado == null) {
            return ResponseEntity.notFound().build();
        }
        produtoAtualizado = produtoService.update(id, produto);
        return ResponseEntity.ok(produtoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Produto> deleteProduto(@PathVariable Long id) {
        Produto produtoDeletado = produtoService.findById(id);
        if(produtoDeletado == null) {
            return ResponseEntity.notFound().build();
        }
        produtoDeletado = produtoService.delete(id);
        return ResponseEntity.ok(produtoDeletado);
    }

    

}
