package br.com.pecepoli.demo.repository;

import br.com.pecepoli.demo.domain.Pacote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


@Repository
public interface PacoteRepository extends JpaRepository<Pacote, UUID> {
    // List<Pacote> findByDescricaoContainingOrLocalidade_DescricaoContaining(String descricao, String localidadeDescricao);

    @Query("from Pacote p where p.descricao like %:descricao% or p.localidade.descricao like %:descricao%")
    List<Pacote> findByDescricaoOrLocalidadeDescricaoLike(String descricao);
}
