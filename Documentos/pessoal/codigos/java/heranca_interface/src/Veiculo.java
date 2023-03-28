public class Veiculo implements IVeiculo {
    private int anoFabricacao;
    private String modelo;
    private String cor;
    private double preco;

    public int getAnoFabricacao() {
        return anoFabricacao;
    }

    public void setAnoFabricacao(int anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }    

    public void andar() {
        System.out.println("Andou");
    };

    public void frear() {
        System.out.println("Freou");
    }
}
