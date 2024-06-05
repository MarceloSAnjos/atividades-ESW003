package br.com.pecepoli.demo.service;

import br.com.pecepoli.demo.domain.Pacote;
import br.com.pecepoli.demo.repository.PacoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacoteService {

    private final PacoteRepository pacoteRepository;

    public PacoteService(PacoteRepository pacoteRepository) {
        this.pacoteRepository = pacoteRepository;
    }

    public List<Pacote> getPacotes() {
        return pacoteRepository.obterTodos();
    }
}
