package senac.backend.persistence.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import senac.backend.persistence.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    Optional<Produto> findById(Long id);

}
