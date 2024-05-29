import java.math.BigDecimal;
import java.util.Date;

public class Contratacao {
    private BigDecimal valor;
    private Date dataContratacao;
    private Cliente cliente;

    public Contratacao(BigDecimal valor, Date dataContratacao, Cliente cliente) {
        this.valor = valor;
        this.dataContratacao = dataContratacao;
        this.cliente = cliente;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Date getDataContratacao() {
        return dataContratacao;
    }

    public void setDataContratacao(Date dataContratacao) {
        this.dataContratacao = dataContratacao;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}
