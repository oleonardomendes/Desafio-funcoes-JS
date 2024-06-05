function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
  
    // Variável para armazenar o nível do jogador
    let nivel;
  
    // Função auxiliar para determinar a faixa de vitórias
    function determinarFaixa(vitorias) {
      if (vitorias < 10) return 'faixa1';
      if (vitorias >= 11 && vitorias <= 20) return 'faixa2';
      if (vitorias >= 21 && vitorias <= 50) return 'faixa3';
      if (vitorias >= 51 && vitorias <= 80) return 'faixa4';
      if (vitorias >= 81 && vitorias <= 90) return 'faixa5';
      if (vitorias >= 91 && vitorias <= 100) return 'faixa6';
      if (vitorias >= 101) return 'faixa7';
      return 'invalido';
    }
  
    // Determina a faixa de vitórias
    const faixaVitorias = determinarFaixa(vitorias);
  
    // Estrutura de decisão para determinar o nível com base na faixa de vitórias
    switch (faixaVitorias) {
      case 'faixa1':
        nivel = "Ferro";
        break;
      case 'faixa2':
        nivel = "Bronze";
        break;
      case 'faixa3':
        nivel = "Prata";
        break;
      case 'faixa4':
        nivel = "Ouro";
        break;
      case 'faixa5':
        nivel = "Diamante";
        break;
      case 'faixa6':
        nivel = "Lendário";
        break;
      case 'faixa7':
        nivel = "Imortal";
        break;
      default:
        nivel = "Nível inválido";
    }
  
    // Retorna o saldo de vitórias e o nível do jogador
    return { saldoVitorias, nivel };
  }
  
  // Solicita a quantidade de vitórias e derrotas do jogador
  const vitorias = "101";
  const derrotas = "11";
  
  // Chama a função para calcular o saldo de vitórias e determinar o nível
  const resultado = calcularNivel(vitorias, derrotas);
  
  // Exibe a mensagem final com o saldo de vitórias e o nível do jogador
  console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
  