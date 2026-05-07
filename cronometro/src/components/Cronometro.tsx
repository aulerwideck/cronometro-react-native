import { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const IMAGEM_CRONOMETRO = require('../../assets/cronometro.png');

type AppState = {
    ultimo_tempo: number;
    tempo_atual: number;
    rodando: boolean;
};

class App extends Component<{}, AppState> {
    interval: any
    constructor(props: {}) {
        super(props);
        this.state = {
            ultimo_tempo: 0,
            tempo_atual: 0,
            rodando: false,
        };

        this.iniciar = this.iniciar.bind(this);
        this.resetar = this.resetar.bind(this);
    }

    /**
     * Função que inicia ou para o cronometro
     * Utiliza setInterval e clearInterval para executar o código que incrementa o contador a cada 100ms
     */ 
    iniciar() {
        if (this.state.rodando){
            clearInterval(this.interval);
            this.setState({ rodando: false })   
        }
        else {
            this.interval = setInterval(() => {
                this.setState({
                    tempo_atual: this.state.tempo_atual + 0.1
                });
            }, 100);
            this.setState({ rodando: true })
        }
    }

    /**
     * Função que reseta o cronometro
     * Antes de salvar as informações, chama a função iniciar para parar o cronômetro
     */ 
    resetar() {
        this.iniciar()
        this.setState({ultimo_tempo: this.state.tempo_atual, tempo_atual: 0 })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Cronômetro</Text>
                <Text style={styles.subtitulo}>
                </Text>

                <Image
                    source={IMAGEM_CRONOMETRO}
                    style={styles.imagemBiscoito}
                    resizeMode="contain"
                />

                <View style={styles.fraseBox}>
                    <Text style={styles.fraseTexto}>
                        Tempo Atual:
                        </Text>
                    <Text style={styles.fraseTexto}>
                        {(this.state.tempo_atual).toFixed(1)} segundos
                    </Text>
                </View>

                <View style={styles.fraseBox}>
                    <Text style={styles.fraseTexto}>
                        Último tempo
                    </Text>
                    <Text style={styles.fraseTexto}>
                        {(this.state.ultimo_tempo).toFixed(1)} segundos
                    </Text>
                </View>

                <TouchableOpacity style={styles.botaoPrimario} onPress={this.iniciar}>
                    <Text style={styles.textoBotao}>{this.state.rodando ? "Parar" : "Iniciar"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSecundario} onPress={this.resetar}>
                    <Text style={styles.textoBotao}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;
