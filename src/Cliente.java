import java.util.Collection;
import java.util.Date;

public class Cliente {
    private String nome;
    private Date dataNascimento;
    private Collection<Contratacao> contratacaos;

    public Cliente(String nome, Date dataNascimento, Collection<Contratacao> contratacaos) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.contratacaos = contratacaos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Collection<Contratacao> getContratacaos() {
        return contratacaos;
    }

    public void setContratacaos(Collection<Contratacao> contratacaos) {
        this.contratacaos = contratacaos;
    }
}
