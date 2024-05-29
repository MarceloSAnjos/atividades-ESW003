import java.util.Collection;

public class Pacote {
    private String descricao;
    private Collection<Localidade> localidades;
    private Collection<ItemPacote> pacotes;

    public Pacote(String descricao, Collection<Localidade> localidades, Collection<ItemPacote> pacotes) {
        this.descricao = descricao;
        this.localidades = localidades;
        this.pacotes = pacotes;
    }

    public Collection<Localidade> getLocalidades() {
        return localidades;
    }

    public void setLocalidades(Collection<Localidade> localidades) {
        this.localidades = localidades;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Collection<ItemPacote> getPacotes() {
        return pacotes;
    }

    public void setPacotes(Collection<ItemPacote> pacotes) {
        this.pacotes = pacotes;
    }
}
