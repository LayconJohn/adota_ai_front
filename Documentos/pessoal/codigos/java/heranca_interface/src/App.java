public class App {
    public static void main(String[] args) throws Exception {
        Bicicleta minhaBicicleta = new Bicicleta();
        minhaBicicleta.setAnoFabricacao(2023);
        Carro meuCarro = new Carro();
        meuCarro.setAnoFabricacao(2022);
        meuCarro.andar();
        minhaBicicleta.andar();
    }
}
