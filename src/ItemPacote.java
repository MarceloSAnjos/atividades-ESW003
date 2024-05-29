import java.math.BigDecimal;

public class ItemPacote {
    private BigDecimal preco;


    public ItemPacote(BigDecimal preco) {
        this.preco = preco;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

}
