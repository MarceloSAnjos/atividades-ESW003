import java.math.BigDecimal;

public class TransladoAereo extends ItemPacote{
    private String companhiaAerea;
    private Integer numeroVoo;

    public TransladoAereo(String companhiaAerea, Integer numeroVoo, BigDecimal preco) {
        super(preco);
        this.companhiaAerea = companhiaAerea;
        this.numeroVoo = numeroVoo;
    }

    public String getCompanhiaAerea() {
        return companhiaAerea;
    }

    public void setCompanhiaAerea(String companhiaAerea) {
        this.companhiaAerea = companhiaAerea;
    }

    public Integer getNumeroVoo() {
        return numeroVoo;
    }

    public void setNumeroVoo(Integer numeroVoo) {
        this.numeroVoo = numeroVoo;
    }
}
