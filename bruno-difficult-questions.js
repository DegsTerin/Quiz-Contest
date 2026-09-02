const MASSARANDUBA_BRUNO_DIFFICULT_QUESTIONS = [
  makeQuestion([
    "bruno-massaranduba-2026-difficult-01",
    "Língua Portuguesa",
    "Difícil",
    "Leia o trecho: \"Às 9h, o sistema ficou lento. Reiniciar o serviço não alterou o quadro. Às 10h, a ativação do enlace secundário reduziu a latência, embora a carga do servidor permanecesse igual.\" Qual inferência é sustentada pelas informações, sem extrapolá-las?",
    [
      "O caminho de rede contribuía para a latência, mas o trecho não demonstra que fosse a única causa possível.",
      "A estabilidade da carga prova que o servidor continuou sendo a causa principal, e a troca de enlace apenas mascarou o problema.",
      "A reinicialização produziu melhora temporária, embora o trecho registre que ela não alterou o quadro antes das 10h.",
      "A ativação do enlace secundário reduziu a carga do servidor, porque menor latência implica necessariamente menor uso de CPU.",
      "A queda da latência comprova resolução definitiva, mesmo sem medições posteriores ou investigação de outras causas."
    ],
    0,
    "A única mudança associada à redução da latência foi o caminho de rede. Isso sustenta sua contribuição para o problema, mas não prova exclusividade causal nem resolução total."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-02",
    "Língua Portuguesa",
    "Difícil",
    "Leia: \"O diagnóstico de 2026 retomou as metas do plano de 2024. Esse plano previa revisão anual. 'Sem medir resultados, não há política sustentável', registrava ainda um parecer de 2022. Por isso, a equipe manteve indicadores comparáveis.\" Assinale a análise correta dos mecanismos de construção textual.",
    [
      "A expressão \"Esse plano\" antecipa o parecer de 2022, a citação constitui discurso indireto e \"Por isso\" introduz oposição ao diagnóstico.",
      "A expressão \"Esse plano\" retoma o plano de 2024; a citação cria intertextualidade explícita; e \"Por isso\" introduz uma conclusão.",
      "A expressão \"Esse plano\" retoma as metas, mas a citação elimina a voz atual e \"Por isso\" apenas ordena cronologicamente as datas.",
      "As datas estabelecem sequência temporal suficiente para dispensar coesão referencial e transformar a citação em simples paráfrase.",
      "A expressão \"ainda\" substitui \"equipe\" como pronome anafórico, e \"Por isso\" retoma somente a expressão \"revisão anual\"."
    ],
    1,
    "O demonstrativo retoma o plano já mencionado; a reprodução identificada de outro parecer cria relação intertextual; e a locução conclusiva liga a decisão às premissas anteriores."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-03",
    "Língua Portuguesa",
    "Difícil",
    "Um guia municipal contém dois trechos. No primeiro, explica como a impermeabilização do solo aumenta o escoamento superficial. No segundo, sob o título \"Procedimentos obrigatórios\", determina: \"Desligue a energia, procure um local elevado e aguarde o aviso da Defesa Civil.\" Qual classificação articula corretamente modo de organização e tipo textual?",
    [
      "O primeiro é narrativo, em relato histórico; o segundo é descritivo, em comunicado informativo.",
      "O primeiro é injuntivo, em texto normativo; o segundo é argumentativo, em texto didático que defende uma tese.",
      "O primeiro é descritivo, em verbete técnico; o segundo é expositivo, em norma que apenas explica um fenômeno.",
      "O primeiro é expositivo, em texto didático; o segundo é injuntivo, em texto normativo de orientação.",
      "Os dois são narrativos, porque a relação causal e os verbos no imperativo organizam eventos em sequência temporal."
    ],
    3,
    "Explicar uma relação causal caracteriza exposição com finalidade didática; ordenar condutas ao leitor caracteriza injunção em uma orientação de caráter normativo."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-04",
    "Língua Portuguesa",
    "Difícil",
    "Na frase \"Somente após a auditoria os técnicos que haviam alterado a rota apresentaram os registros ao gestor\", a expressão inicial restringe o momento da apresentação, e a oração relativa restringe o grupo de técnicos. Qual reordenação preserva simultaneamente esses dois sentidos?",
    [
      "Os técnicos que haviam alterado a rota apresentaram os registros ao gestor somente após a auditoria.",
      "Somente os técnicos, que haviam alterado a rota, apresentaram após a auditoria os registros ao gestor.",
      "Após a auditoria, os técnicos apresentaram somente os registros que haviam alterado a rota ao gestor.",
      "Os técnicos, que haviam alterado a rota, somente apresentaram os registros após a auditoria ao gestor.",
      "Os registros somente após a auditoria apresentaram ao gestor os técnicos que haviam alterado a rota."
    ],
    0,
    "A redação preserva \"somente\" junto ao adjunto temporal e conserva a oração relativa sem vírgulas, restringindo o antecedente \"técnicos\"."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-05",
    "Língua Portuguesa",
    "Difícil",
    "Em um relatório formal, deve-se converter para discurso indireto a declaração: O técnico afirmou: \"Não reiniciarei o servidor antes da cópia.\" Qual versão preserva o sentido, emprega pontuação adequada e mantém registro formal e função referencial?",
    [
      "O técnico afirmou, \"que não reiniciará o servidor antes da cópia\".",
      "O técnico afirmou: que não reiniciaria o servidor antes da cópia.",
      "O técnico falou que não vai reiniciar o servidor antes da cópia, beleza?",
      "O técnico afirmou que não reiniciaria o servidor antes da cópia.",
      "O técnico afirmou que: não reiniciaria, o servidor antes da cópia."
    ],
    3,
    "No discurso indireto, a conjunção \"que\" introduz a oração sem dois-pontos ou aspas; com o verbo declarativo no passado, o futuro passa adequadamente a futuro do pretérito."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-06",
    "Língua Portuguesa",
    "Difícil",
    "Analise: \"Infelizmente, a desconfiguração talvez tenha tornado o serviço inutilizável.\" Qual alternativa identifica corretamente classes, formação vocabular e modalização?",
    [
      "\"Infelizmente\" é substantivo abstrato; \"talvez\" expressa certeza; \"desconfiguração\" é forma verbal; e \"inutilizável\" atua como advérbio.",
      "\"Desconfiguração\" é palavra primitiva; \"infelizmente\" e \"talvez\" são adjetivos; \"inutilizável\" modaliza certeza, e não há avaliação na frase.",
      "\"Infelizmente\" é advérbio avaliativo; \"talvez\" modaliza possibilidade; \"desconfiguração\" é substantivo derivado; e \"inutilizável\" é adjetivo.",
      "\"Talvez\" é conjunção causal; \"desconfiguração\" é pronome derivado; e os prefixos de \"infelizmente\" e \"inutilizável\" indicam repetição.",
      "\"Infelizmente\" e \"talvez\" são advérbios de tempo ligados a \"tenha tornado\", enquanto \"inutilizável\" nomeia o processo como substantivo."
    ],
    2,
    "Os advérbios marcam, respectivamente, avaliação e possibilidade. \"Desconfiguração\" resulta de derivação e nomeia um processo; \"inutilizável\" atribui uma propriedade ao serviço."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-07",
    "Língua Portuguesa",
    "Difícil",
    "Um dicionário geral registra dois sentidos de \"nuvem\": o meteorológico e, sob a rubrica \"Informática\", o de recursos computacionais remotos. Considere: I. A rubrica delimita um uso especializado. II. O contexto resolve a polissemia no aviso \"Os arquivos serão mantidos na nuvem\". III. Nesse aviso, substituir \"nuvem\" por \"Internet\" preservaria necessariamente a mesma precisão. Está correto o que se afirma em:",
    [
      "I, apenas.",
      "III, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I, II e III."
    ],
    2,
    "A rubrica marca o domínio técnico, e o contexto seleciona esse sentido polissêmico. \"Internet\" e \"nuvem\" não são equivalentes necessários: serviços em nuvem usam redes, mas designam uma arquitetura de recursos específica."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-08",
    "Língua Portuguesa",
    "Difícil",
    "Considere as frases: I. \"À medida que avançava, o técnico pôde concluir que o defeito não se devia à instalação.\" II. \"Daqui a duas horas, a equipe retornará à sala e entregará o relatório àquela gestora.\" III. \"Os itens permanecem à disposição de quem vier a revisá-los.\" Está correto quanto à ortografia, à acentuação e ao emprego da crase o que se apresenta em:",
    [
      "I, apenas.",
      "II, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "II e III, apenas."
    ],
    2,
    "As três frases estão corretas: há crase na locução \"à medida que\", nas regências com \"instalação\" e \"sala\", diante de \"aquela\" e em \"à disposição\"; não há crase em \"daqui a\" nem antes do infinitivo."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-09",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Um armazenamento de 2,4 TB, em unidades decimais, estava com 5/8 da capacidade ocupada. Foram removidos 180 GB e, depois, copiados 135 GB. Qual é a ocupação final em gigabytes e como fração irredutível da capacidade total?",
    [
      "1.365 GB e 91/160.",
      "1.455 GB e 97/160.",
      "1.455 GB e 97/100.",
      "1.635 GB e 109/160.",
      "1.275 GB e 17/32."
    ],
    1,
    "Como 2,4 TB correspondem a 2.400 GB, a ocupação inicial era 2.400 × 5/8 = 1.500 GB. Depois das operações: 1.500 − 180 + 135 = 1.455 GB; 1.455/2.400 simplifica para 97/160."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-10",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Seis técnicos configuram 180 computadores em 5 horas, com produtividade igual e constante. Um novo procedimento reduz em 20% a produtividade individual. Quantos técnicos serão necessários para configurar 288 computadores em 6 horas sob o novo procedimento?",
    [
      "10 técnicos.",
      "8 técnicos.",
      "9 técnicos.",
      "12 técnicos.",
      "15 técnicos."
    ],
    0,
    "A produtividade original é 180 ÷ (6 × 5) = 6 computadores por técnico-hora. Com redução de 20%, passa a 4,8. Logo, 288 ÷ (6 × 4,8) = 10 técnicos."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-11",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Uma reserva de R$ 10.000,00 rende juros compostos de 10% ao período durante três períodos. Ao final, são retiradas três despesas que formam a progressão aritmética R$ 200,00, R$ 300,00 e R$ 400,00. Qual saldo resta?",
    [
      "R$ 12.100,00.",
      "R$ 12.310,00.",
      "R$ 13.410,00.",
      "R$ 12.410,00.",
      "R$ 14.210,00."
    ],
    3,
    "O montante é 10.000 × 1,10³ = R$ 13.310,00. A soma da progressão é R$ 900,00; portanto, restam R$ 12.410,00."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-12",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "No domínio real, resolva a equação log₂(x − 1) + log₂(x + 1) = 3.",
    [
      "x = −3.",
      "x = −1.",
      "x = 1.",
      "x = √8.",
      "x = 3."
    ],
    4,
    "O domínio exige x > 1. Pela propriedade dos logaritmos, log₂[(x − 1)(x + 1)] = 3, então x² − 1 = 8 e x = ±3. Apenas x = 3 pertence ao domínio."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-13",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Uma tabela relaciona usuários simultâneos x e latência f(x): (20, 35 ms), (50, 50 ms) e (80, 65 ms). Admitindo que o gráfico seja uma reta, qual função modela os dados e qual é o maior número de usuários para manter a latência em até 60 ms?",
    [
      "f(x) = x + 15; no máximo 45 usuários.",
      "f(x) = 0,5x + 15; no máximo 90 usuários.",
      "f(x) = 0,5x + 25; no máximo 70 usuários.",
      "f(x) = 2x − 5; no máximo 32 usuários.",
      "f(x) = 25x + 0,5; no máximo 2 usuários."
    ],
    2,
    "A variação é 15 ms para 30 usuários, logo a inclinação é 0,5. Usando (20, 35), obtém-se o intercepto 25. De 0,5x + 25 ≤ 60 resulta x ≤ 70."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-14",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Considere o sistema parametrizado (k − 1)x + 2y = 4 e 2x + 4y = 8. Qual classificação relaciona corretamente o parâmetro k ao número de soluções?",
    [
      "Para k = 2, o sistema é impossível; para k ≠ 2, possui infinitas soluções.",
      "Para k = 2, possui infinitas soluções; para k ≠ 2, possui solução única.",
      "Para todo k real, o sistema possui exatamente uma solução.",
      "Para k = 1, possui infinitas soluções; para os demais valores, é impossível.",
      "Para k = 2, possui solução única; para k ≠ 2, é impossível."
    ],
    1,
    "O determinante da matriz [[k − 1, 2], [2, 4]] é 4(k − 2). Para k ≠ 2, ele é não nulo e há solução única. Para k = 2, a primeira equação é metade da segunda, produzindo infinitas soluções."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-15",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Um cabo seguirá em linha reta entre cantos opostos de uma sala de 8 m por 6 m e ainda vencerá um desnível vertical de 2,4 m. Considerando o percurso tridimensional e acrescentando 5% de folga, qual comprimento mínimo aproximado deve ser adquirido?",
    [
      "10,3 m.",
      "10,5 m.",
      "10,6 m.",
      "10,8 m.",
      "12,4 m."
    ],
    3,
    "A diagonal espacial mede √(8² + 6² + 2,4²) = √105,76 ≈ 10,284 m. Com 5% de folga: 10,284 × 1,05 ≈ 10,8 m."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-16",
    "Matemática e Raciocínio Lógico",
    "Difícil",
    "Entre oito equipamentos distintos, três são servidores e cinco são estações. Selecionam-se ao acaso três equipamentos, sem reposição. Qual é a probabilidade de a seleção conter exatamente dois servidores e uma estação?",
    [
      "12/56.",
      "5/28.",
      "15/56.",
      "5/14.",
      "3/8."
    ],
    2,
    "Há C(8,3) = 56 seleções possíveis. As favoráveis são C(3,2) × C(5,1) = 3 × 5 = 15; portanto, a probabilidade é 15/56."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-17",
    "Conhecimentos Gerais",
    "Difícil",
    "Uma exposição sobre Massaranduba apresenta, nesta ordem, vestígios da presença indígena, documentos da chegada de grupos alemães, italianos, poloneses e luso-brasileiros por volta de 1870 e registros posteriores da consolidação do cultivo de arroz irrigado. Qual interpretação respeita as evidências e evita anacronismos?",
    [
      "Os vestígios indígenas podem ser datados apenas pelos documentos de 1870 e, portanto, não indicam presença anterior ao povoamento europeu registrado.",
      "A chegada de grupos diversos no século XIX explica a presença indígena como consequência direta da imigração e inaugura toda a ocupação regional.",
      "O destaque posterior do arroz permite atribuir a todos os grupos a mesma atividade desde a chegada, embora a exposição separe os períodos.",
      "A história local combina presença indígena anterior, povoamento posterior por grupos diversos e transformação econômica em que o arroz irrigado ganhou destaque.",
      "A consolidação do arroz encerrou as demais atividades econômicas, conclusão comprovada pela ordem dos registros sem necessidade de outras evidências."
    ],
    3,
    "A interpretação conserva a sequência documentada e distingue presença anterior, povoamento plural e desenvolvimento econômico posterior, sem inverter causas nem excluir outras atividades."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-18",
    "Conhecimentos Gerais",
    "Difícil",
    "Massaranduba integra o Vale do Itapocu, tem áreas ligadas à bacia do rio Itapocu e combina a relevância do arroz irrigado com atividades industriais e de serviços. Qual diagnóstico territorial relaciona adequadamente geografia e economia?",
    [
      "A diversificação reduz a dependência do arroz e, por isso, a gestão hídrica pode restringir-se às propriedades irrigadas, sem considerar cidades ou vias.",
      "A gestão da água e do solo deve considerar a bacia: irrigação, áreas urbanas, indústria, vias e municípios compartilham riscos e recursos a montante e a jusante.",
      "Como a irrigação depende da bacia, basta administrar captações no município, pois usos a montante e a jusante não alteram disponibilidade ou cheias.",
      "A coordenação intermunicipal deve limitar-se à indústria, já que agricultura, drenagem urbana e estradas produzem efeitos somente locais.",
      "A expansão industrial substituiu a função econômica do espaço rural; assim, estiagens afetam a lavoura, mas não a logística nem os serviços."
    ],
    1,
    "Água, drenagem, ocupação territorial e circulação econômica ultrapassam limites municipais. A análise de bacia conecta produção rural, atividades urbanas, infraestrutura e prevenção de riscos."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-19",
    "Conhecimentos Gerais",
    "Difícil",
    "Um painel público registra aumento do emprego formal, frequência escolar estável e queda da cobertura de uma ação preventiva de saúde. Qual conclusão orienta uma decisão responsável sobre esse cenário social e econômico?",
    [
      "A simultaneidade autoriza concluir que o emprego causou a queda preventiva; como a frequência não variou, a educação dispensa investigação adicional.",
      "A frequência estável basta para comprovar aprendizagem; assim, recursos de avaliação podem ser transferidos integralmente para a saúde preventiva.",
      "Os indicadores medem dimensões distintas; é preciso desagregar dados, investigar causas e responder à queda preventiva sem inferir causalidade nem abandonar o acompanhamento educacional.",
      "O ganho de emprego compensa a piora preventiva e permite reduzir ações de saúde, desde que a frequência escolar permaneça sem variação no painel.",
      "A divergência entre dimensões torna o painel metodologicamente inválido; ele deve ser descartado sem conferir séries, recortes, definições ou fontes responsáveis."
    ],
    2,
    "Correlação temporal não prova causalidade. Emprego, frequência e prevenção medem dimensões diferentes e exigem dados complementares, análise distributiva e respostas específicas."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-20",
    "Conhecimentos Gerais",
    "Difícil",
    "Um consórcio pretende ampliar geração solar e armazenamento por baterias, mas parte dos minerais e componentes vem de cadeias internacionais concentradas. Qual estratégia integra tecnologia, energia, geopolítica, sustentabilidade e ecologia?",
    [
      "Priorizar menor custo inicial e garantia do fabricante, deixando origem dos minerais, manutenção e descarte para análise somente após a compra.",
      "Suspender baterias e manter somente geração solar, pois eliminar o armazenamento removeria impactos minerais sem criar riscos operacionais para a rede.",
      "Concentrar compras em um fornecedor internacional com contrato longo, usando escala e preço como substitutos da diversificação logística.",
      "Comparar eficiência e emissões na operação, mas excluir mineração, fabricação, transporte e fim de vida por ocorrerem fora do território consumidor.",
      "Planejar rede e armazenamento, diversificar fornecedores, avaliar o ciclo de vida, exigir rastreabilidade e reciclagem e mitigar impactos sobre água, solo e biodiversidade."
    ],
    4,
    "A transição energética exige confiabilidade técnica e análise de toda a cadeia. Diversificação, circularidade, rastreabilidade e proteção ambiental reduzem riscos geopolíticos e socioambientais."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-21",
    "Conhecimentos Específicos",
    "Difícil",
    "Um scanner USB liga normalmente, mas o Windows o identifica como dispositivo desconhecido. O mesmo cabo e a mesma porta reconhecem outro periférico, e o aplicativo de digitalização informa que não há fonte disponível. Qual diagnóstico inicial integra corretamente hardware, periférico e software?",
    [
      "A enumeração como dispositivo desconhecido confirma defeito interno; deve-se substituir o scanner antes de consultar identificadores ou drivers disponíveis.",
      "Como outro periférico funciona, cabo e porta estão validados para qualquer classe USB; deve-se reinstalar apenas o aplicativo de digitalização.",
      "Porta e cabo têm indícios de funcionamento; deve-se verificar e instalar o driver compatível e, depois, selecionar e testar o scanner no aplicativo.",
      "Deve-se configurar o scanner como dispositivo de saída e reinstalar o serviço de impressão, pois a digitalização envia dados ao computador.",
      "A primeira etapa é recriar o perfil do usuário e o cache do aplicativo, mesmo que o Windows ainda não reconheça corretamente o dispositivo."
    ],
    2,
    "Os testes reduzem a probabilidade de falha no cabo ou na porta. A identificação genérica e a ausência de fonte no aplicativo apontam primeiro para driver ou integração de software."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-22",
    "Conhecimentos Específicos",
    "Difícil",
    "Analise as afirmações sobre arquitetura de computadores. I. O barramento de endereços identifica posições de memória ou dispositivos, enquanto o barramento de dados transporta os valores. II. A RAM é volátil, e níveis de cache próximos ao processador reduzem o tempo médio de acesso a dados frequentes. III. Todo conector PCI Express fisicamente x16 fornece obrigatoriamente dezesseis pistas elétricas. Está correto o que se afirma em:",
    [
      "I, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I e III, apenas.",
      "I, II e III."
    ],
    1,
    "I e II descrevem funções e propriedades corretas. Um slot com formato x16 pode ser eletricamente ligado com menos pistas, portanto a afirmação III é absoluta e falsa."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-23",
    "Conhecimentos Específicos",
    "Difícil",
    "Após instalar um SSD NVMe novo, o firmware UEFI o lista com capacidade correta, mas o Windows 10 não o mostra no Explorador de Arquivos. O Gerenciamento de Disco exibe o dispositivo como \"Não inicializado\" e todo o espaço como \"Não alocado\". Supondo que não haja dados a preservar, qual ação é adequada?",
    [
      "Atualizar o UEFI antes de preparar o disco, embora o firmware e o Windows já detectem o dispositivo e sua capacidade.",
      "Inicializar o disco, criar um volume, formatá-lo com sistema de arquivos adequado e atribuir uma letra de unidade.",
      "Reinstalar apenas o driver do controlador e aguardar que o espaço não alocado se transforme automaticamente em volume.",
      "Ativar RAID, converter o disco e criar um arranjo, mesmo sem outro dispositivo e sem requisito de redundância.",
      "Regravar o firmware do SSD antes de verificar a tabela de partições, apesar de o hardware estar enumerado corretamente."
    ],
    1,
    "O UEFI e o Gerenciamento de Disco já detectam o hardware. Falta preparar logicamente o armazenamento para que o sistema de arquivos seja montado e apareça no Explorador."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-24",
    "Conhecimentos Específicos",
    "Difícil",
    "Uma estação conectada a um nobreak desliga apenas durante testes intensivos de CPU. O nobreak indica 35% de carga, suas medições de saída permanecem estáveis, a CPU alcança 98 °C e o ventilador do processador registra 0 RPM. Qual procedimento é tecnicamente mais fundamentado?",
    [
      "Substituir primeiro o nobreak, pois a leitura média de 35% pode ocultar picos, sem investigar o ventilador parado nem a temperatura de 98 °C.",
      "Atualizar o firmware e elevar o limite térmico antes de abrir o gabinete, mantendo o teste de carga para verificar se a proteção deixa de atuar.",
      "Desligar a estação; inspecionar alimentação e fixação do ventilador, dissipador, fluxo de ar e pasta térmica; corrigir e repetir o teste monitorado.",
      "Trocar somente a pasta térmica e repetir a carga, mesmo que o ventilador continue indicando 0 RPM e sua alimentação não tenha sido verificada.",
      "Substituir a fonte interna com base no desligamento, sem testar a refrigeração, porque a saída estável do nobreak não informa a temperatura da CPU."
    ],
    2,
    "As evidências afastam sobrecarga do nobreak e apontam para falha de refrigeração. A proteção térmica não deve ser contornada; o conjunto de ventilação e dissipação precisa ser corrigido com o equipamento desligado."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-25",
    "Conhecimentos Específicos",
    "Difícil",
    "No Windows 10, uma pasta NTFS concede \"Modificar\" ao grupo Técnicos. O mesmo usuário pertence também ao grupo Temporários, que possui uma permissão explícita de negação de \"Gravar\" nessa pasta. Não há outra regra aplicável. Qual será o acesso efetivo?",
    [
      "Somar as permissões dos grupos e conceder gravação, pois \"Modificar\" inclui esse direito e foi atribuído por um grupo técnico.",
      "O usuário poderá ler o conteúdo permitido, mas não poderá gravar, pois a negação explícita aplicável prevalece nesse direito.",
      "Aplicar a negação somente se estiver diretamente no usuário, pois uma negação atribuída a grupo não participaria do cálculo do acesso efetivo.",
      "Escolher a regra do grupo listado primeiro na ACL e ignorar as demais associações do usuário durante a verificação do direito de gravação.",
      "Negar também leitura e execução, porque a proibição de gravar herdada de um grupo removeria automaticamente todos os outros direitos concedidos."
    ],
    1,
    "As permissões efetivas combinam as concessões aplicáveis, mas uma negação explícita prevalece para o direito negado. Isso não elimina automaticamente direitos distintos, como leitura."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-26",
    "Conhecimentos Específicos",
    "Difícil",
    "Um manual no Microsoft Word precisa de capítulos numerados, cabeçalhos distintos por seção, legendas de figuras, referências cruzadas e sumário atualizável. Após inserir páginas, toda a numeração deve permanecer coerente. Qual fluxo atende ao conjunto?",
    [
      "Usar formatação direta nos títulos, quebras de página entre capítulos e textos digitados para legendas e referências, atualizando números manualmente ao final.",
      "Vincular lista multinível aos estilos de título, usar quebras de seção, desvincular cada cabeçalho do anterior, inserir legendas e referências cruzadas como campos e atualizar todos os campos e o sumário.",
      "Aplicar estilos de título e gerar o sumário, mas manter uma única seção, inserir legendas sem rótulo automático e digitar referências e números; depois regenerar apenas o sumário a cada alteração.",
      "Separar capítulos por quebras de seção, porém formatar títulos como corpo de texto, bloquear campos e usar caixas de texto independentes para todas as referências.",
      "Criar uma tabela para simular o sumário, usar notas de rodapé como legendas e reiniciar a numeração das figuras sempre que uma página for acrescentada."
    ],
    1,
    "Estilos vinculados à lista estruturam e numeram capítulos; a quebra cria seções, e desativar Vincular ao Anterior permite cabeçalhos distintos. Legendas e referências cruzadas usam campos, cuja atualização propaga mudanças de texto, ordem e paginação."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-27",
    "Conhecimentos Específicos",
    "Difícil",
    "No Excel em português-Brasil, a coluna A contém o setor, a B contém a situação e a C contém o custo. Qual fórmula soma os custos das linhas em que o setor é \"TI\" e a situação é \"Ativo\"?",
    [
      "=SOMASE(A2:A100;\"TI\";B2:B100;\"Ativo\";C2:C100)",
      "=SOMA(A2:A100=\"TI\";B2:B100=\"Ativo\";C2:C100)",
      "=CONT.SES(A2:A100;\"TI\";B2:B100;\"Ativo\";C2:C100)",
      "=SOMASES(C2:C100;A2:A100;\"TI\";B2:B100;\"Ativo\")",
      "=SOMASES(A2:A100;C2:C100;\"TI\";B2:B100;\"Ativo\")"
    ],
    3,
    "SOMASES recebe primeiro o intervalo a somar e, depois, pares de intervalo de critério e critério. Assim, soma C quando A é \"TI\" e B é \"Ativo\"."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-28",
    "Conhecimentos Específicos",
    "Difícil",
    "Uma equipe prepara uma apresentação restrita. Autores devem alterar o arquivo, revisores apenas comentar e convidados externos somente visualizar. O resultado será conferido no PowerPoint e distribuído por convite do Outlook. Qual fluxo configura e comprova o acesso corretamente?",
    [
      "Dar papel Editor aos três grupos, usar a orientação por e-mail para restringir revisores e convidados e validar no PowerPoint somente com a conta do proprietário, sem simular as outras identidades.",
      "Definir autores como Comentadores, revisores como Leitores e convidados como Editores; depois validar o link apenas na sessão já autenticada de um autor.",
      "Atribuir a função Editor aos autores, Comentador aos revisores e Leitor aos convidados; testar cada função com contas representativas, conferir o arquivo no PowerPoint e enviar pelo Outlook o link validado.",
      "Publicar o arquivo na Web sem restrição e usar a função Leitor apenas para os autores; considerar a abertura anônima equivalente ao teste das três funções.",
      "Manter o arquivo privado ao proprietário, anexar cópias no Outlook e testar a aparência no navegador, sem verificar se comentários e edições são efetivamente bloqueados."
    ],
    2,
    "Os papéis aplicam o menor privilégio exigido. Testes com identidades representativas comprovam o comportamento real, enquanto PowerPoint, Outlook e navegador validam conteúdo, distribuição e acesso."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-29",
    "Conhecimentos Específicos",
    "Difícil",
    "Há um backup completo íntegro de domingo e incrementais de segunda, terça e quarta-feira. O incremental de terça está corrompido; os demais arquivos estão íntegros, e não existe outra cópia das alterações de terça. Qual é o ponto mais recente cuja recuperação pode ser garantida pela cadeia disponível?",
    [
      "Domingo, porque qualquer corrupção em um incremental invalida também todos os incrementais anteriores da mesma cadeia.",
      "Quarta-feira, aplicando ao completo apenas o incremental de quarta, que contém todas as mudanças desde domingo.",
      "Segunda-feira, restaurando o completo de domingo e o incremental de segunda; a corrupção de terça impede garantir os estados posteriores.",
      "Quarta-feira, aplicando segunda e quarta em sequência, como se cada incremental fosse cumulativo desde o completo e recompusesse automaticamente o arquivo ausente.",
      "Terça-feira, porque o catálogo do backup basta para reconstruir os blocos corrompidos mesmo sem outra cópia dos dados."
    ],
    2,
    "Cada incremental depende do estado produzido pelo anterior. O completo mais o incremental de segunda formam uma cadeia íntegra; sem as mudanças válidas de terça, não se garantem terça nem quarta."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-30",
    "Conhecimentos Específicos",
    "Difícil",
    "Após abrir um anexo, uma estação executa um processo desconhecido, inicia conexões externas incomuns e tenta ler credenciais salvas. Qual resposta inicial reduz o risco sem destruir evidências úteis?",
    [
      "Manter a estação conectada para capturar mais tráfego e executar tarefas comuns, adiando a contenção até identificar com certeza a família da ameaça.",
      "Isolar a estação da rede, preservar registros, acionar o procedimento de resposta, analisar com mecanismos atualizados e trocar credenciais expostas a partir de dispositivo confiável.",
      "Reiniciar imediatamente em modo de segurança e remover o processo antes de registrar conexões, processos, horários e demais evidências voláteis.",
      "Trocar as credenciais na própria estação suspeita e manter a sessão de rede ativa, usando a alteração de senha como única medida de contenção.",
      "Encerrar o processo e apagar o anexo sem isolar a estação, preservando apenas o alerta do antivírus e dispensando a análise de persistência."
    ],
    1,
    "O comportamento é compatível com malware. O isolamento limita comunicação e propagação; a preservação de registros apoia a análise. A contenção deve seguir o processo de resposta e a troca de credenciais deve ocorrer em ambiente confiável."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-31",
    "Conhecimentos Específicos",
    "Difícil",
    "Uma rede em estrela estendida possui dois switches interligados por dois enlaces Ethernet redundantes. Após ativar o segundo enlace sem agregação, surgem tempestade de broadcast e oscilação da tabela MAC. Qual ação preserva redundância sem manter o loop de camada 2?",
    [
      "Desativar STP e manter ambos os enlaces encaminhando, usando controle de tempestade e uma rota padrão para limitar os sintomas sem remover o ciclo lógico.",
      "Remover definitivamente um dos enlaces interrompe o loop, mas elimina o caminho redundante solicitado para contingência entre os switches.",
      "Habilitar e verificar STP para bloquear logicamente um caminho redundante e liberá-lo se o enlace ativo falhar.",
      "Separar os endereços de gerenciamento em sub-redes distintas, mantendo os dois enlaces na mesma camada 2 e sem mecanismo de prevenção de loop.",
      "Reduzir o TTL dos hosts e aplicar uma ACL IP nas portas, embora tempestades de broadcast Ethernet não dependam desses campos de camada 3."
    ],
    2,
    "STP calcula uma árvore lógica sem ciclos, mantendo um enlace redundante bloqueado. Diante de falha, a topologia pode convergir e liberar o caminho alternativo sem tempestade de broadcast."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-32",
    "Conhecimentos Específicos",
    "Difícil",
    "Dois switches em prédios distintos serão interligados por 180 m de fibra. Um lado possui transceptor 1000BASE-SX para fibra multimodo a 850 nm; o outro ainda será especificado. O que deve ser validado para formar um enlace Ethernet interoperável?",
    [
      "Validar conector e potência recebida; se os módulos couberem nas portas, padrões, comprimentos de onda e tipos de fibra distintos negociarão automaticamente.",
      "Um transceptor 1000BASE-LX monomodo na outra ponta, mantendo SX multimodo na primeira, já que ambos operam a 1 Gbit/s.",
      "Nas duas pontas, padrão Ethernet, velocidade, comprimento de onda, tipo de fibra, conectores, orçamento óptico, distância e suporte das portas dos switches.",
      "Somente a distância nominal da fibra, pois potência óptica, padrão dos módulos e compatibilidade das portas não afetam a negociação.",
      "Um conversor para cobre em apenas uma extremidade, preservando o transceptor óptico sem par compatível na extremidade oposta."
    ],
    2,
    "Um enlace exige meios e ópticas compatíveis nas duas extremidades. Mesmo velocidade ou conector não bastam: padrão, comprimento de onda, fibra, potência, alcance e suporte do switch precisam coincidir."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-33",
    "Conhecimentos Específicos",
    "Difícil",
    "No modelo TCP/IP, o host 192.168.10.20/24 envia um pacote ao servidor 203.0.113.50 por meio do gateway 192.168.10.1. Sem NAT, o que ocorre com os endereços ao atravessar o primeiro roteador?",
    [
      "O host usa ARP para descobrir o MAC do servidor remoto e envia o quadro diretamente a esse MAC através do roteador.",
      "O gateway troca o IP de destino pelo próprio endereço a cada salto e preserva os MACs de origem e destino do primeiro quadro até o servidor remoto.",
      "O host transmite um broadcast IP até localizar o servidor; o roteador preserva o quadro Ethernet no próximo enlace.",
      "O host resolve por ARP o MAC do gateway; a cada salto roteado, o roteador reencapsula o pacote para o enlace seguinte, mas o IP final permanece 203.0.113.50.",
      "O DNS fornece ao host o MAC do gateway e substitui o IP do servidor pelo endereço de broadcast da rede local."
    ],
    3,
    "Como o destino está fora da sub-rede, o host encapsula o pacote para o MAC do gateway obtido por ARP. A cada salto roteado, o roteador reencapsula o pacote para o enlace seguinte; sem NAT, o IP de destino não muda."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-34",
    "Conhecimentos Específicos",
    "Difícil",
    "Um roteador possui as rotas 172.16.0.0/12 via A, 172.20.0.0/16 via B, 172.20.8.0/21 via C e uma rota padrão via D. Para qual próximo salto será enviado um pacote destinado a 172.20.15.200?",
    [
      "Via A, porque a rota agregada /12 cobre o destino e sua abrangência seria avaliada antes da extensão do prefixo.",
      "Via C, porque 172.20.15.200 pertence ao intervalo de 172.20.8.0/21 e essa é a correspondência mais específica.",
      "Via B, porque /16 é mais específico que /12, mas a rota /21 seria usada apenas para endereços até 172.20.15.127.",
      "Via D, porque a rota /21 termina em 172.20.14.255 e as rotas privadas não podem encaminhar o host informado.",
      "O pacote será descartado como endereço de broadcast da sub-rede /21, apesar de o broadcast desse bloco ser 172.20.15.255."
    ],
    1,
    "O prefixo /21 cobre de 172.20.8.0 a 172.20.15.255. Como o destino corresponde a /12, /16 e /21, o roteador escolhe o prefixo mais longo, via C."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-35",
    "Conhecimentos Específicos",
    "Difícil",
    "Dois pontos de acesso de 2,4 GHz usam o mesmo SSID e a mesma política de segurança. Estão próximos, operam no mesmo canal largo e com potência máxima; clientes permanecem ligados ao ponto mais distante e sofrem retransmissões. Qual ajuste inicial é mais coerente?",
    [
      "Reduzir a potência dos dois pontos, mas mantê-los no mesmo canal largo, avaliando apenas intensidade de sinal e não a interferência cocanal.",
      "Escolher canais não sobrepostos, mas conservar potência máxima e posicionamento atual, sem medir sobreposição de células nem comportamento dos clientes.",
      "Planejar canais não sobrepostos, ajustar potência e posicionamento para cobertura adequada e validar roaming e interferência com medições.",
      "Usar canais de 40 MHz em todos os pontos e reduzir potência, pressupondo que maior largura sempre diminua a interferência no espectro de 2,4 GHz.",
      "Criar SSIDs distintos para forçar escolha manual do ponto mais próximo, aceitando interromper o roaming sem diagnosticar canais ou cobertura."
    ],
    2,
    "Canal, largura, potência e posicionamento afetam interferência e tamanho das células. A correção deve ser medida; SSIDs distintos interrompem o roaming e canais largos podem aumentar a sobreposição."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-36",
    "Conhecimentos Específicos",
    "Difícil",
    "Um computador grava áudio e vídeo localmente sem falhas e reproduz streaming HTTPS. Em uma chamada VoIP, a sinalização estabelece a chamada e o interlocutor ouve o usuário local, mas nenhum pacote RTP de retorno chega ao computador. Qual hipótese deve ser investigada primeiro?",
    [
      "Falha do dispositivo de captura ou de seu driver, embora a gravação local demonstre que o áudio é entregue corretamente à aplicação.",
      "Bloqueio ou tradução incorreta do RTP de retorno no firewall/NAT, considerando portas e endereços de mídia anunciados.",
      "Incompatibilidade de codec como causa de nenhum pacote chegar, embora uma falha de decodificação pressupusesse tráfego RTP recebido para processar.",
      "Liberação comprovada de todo UDP pelo teste HTTPS, inferindo que conectividade TCP de aplicação valida também as portas dinâmicas de mídia.",
      "Falha de DNS para o servidor de sinalização, mesmo que a chamada já tenha sido estabelecida e o fluxo RTP de saída alcance o interlocutor."
    ],
    1,
    "A captura e a reprodução locais têm evidência de funcionamento, e a sinalização foi concluída. A ausência de RTP em apenas um sentido aponta para o caminho de mídia, frequentemente afetado por firewall ou NAT."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-37",
    "Conhecimentos Específicos",
    "Difícil",
    "Um equipamento não inventariado é conectado a uma tomada de rede em armário destrancado. Logo depois, o monitoramento registra varredura interna a partir dessa porta. Qual resposta combina análise de tráfego, política e segurança física e lógica?",
    [
      "Quarentenar ou desativar a porta, preservar e analisar registros, identificar o equipamento, controlar o armário e aplicar autenticação de rede e política de dispositivos autorizados.",
      "Quarentenar a porta e reformatar imediatamente o equipamento antes de preservar registros ou identificar seu responsável, usando a reinstalação como prova suficiente do escopo.",
      "Trancar o armário e cadastrar o MAC observado na lista permitida, mantendo o dispositivo conectado e dispensando análise dos registros já produzidos.",
      "Aplicar uma ACL contra a sub-rede varrida, mas manter o equipamento não inventariado na porta e não revisar acesso físico, identidade ou outros destinos.",
      "Desativar a porta até cessarem os alertas e depois reativá-la com o mesmo acesso, sem identificar o dispositivo nem estabelecer política de admissão."
    ],
    0,
    "A contenção limita o risco; registros e tráfego preservados permitem determinar escopo. Controle físico, autenticação de acesso e política de inventário formam camadas complementares."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-38",
    "Conhecimentos Específicos",
    "Difícil",
    "Em um banco relacional, Setor(id, nome) possui chave primária id, e Equipamento(id, setor_id, numero_patrimonio) possui chave estrangeira setor_id referenciando Setor.id. Há equipamentos vinculados ao setor 7. Qual comportamento preserva a integridade referencial ao excluir esse setor?",
    [
      "Executar a exclusão com NO ACTION e manter setor_id = 7, pois a unicidade de numero_patrimonio validaria também a existência do setor referenciado.",
      "Rejeitar a exclusão enquanto houver referências, salvo se uma ação configurada, como CASCADE ou SET NULL válido, tratar as linhas dependentes.",
      "Aplicar CASCADE obrigatoriamente em toda chave estrangeira, ainda que a regra de negócio exija preservar equipamentos e seus números de patrimônio.",
      "Criar um índice único em numero_patrimonio, pois índices substituem a validação da relação entre setor_id e Setor.id.",
      "Usar maior nível de isolamento na transação, que converte automaticamente setor_id em NULL sem ação referencial definida."
    ],
    1,
    "A chave estrangeira impede referências órfãs. A exclusão só pode ocorrer após tratar as linhas dependentes ou mediante ação referencial previamente definida e compatível com o modelo."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-39",
    "Conhecimentos Específicos",
    "Difícil",
    "Uma conta começa com saldo 100. Executam-se: BEGIN; UPDATE Conta SET saldo = saldo - 20; SAVEPOINT s1; UPDATE Conta SET saldo = saldo - 30; ROLLBACK TO s1; COMMIT. Qual é o saldo persistido e como se classificam UPDATE e os comandos de controle da transação?",
    [
      "Saldo 50; UPDATE é DDL, e SAVEPOINT e COMMIT são DCL.",
      "Saldo 70; UPDATE é DML, e somente COMMIT pertence à TCL.",
      "Saldo 80; UPDATE é DML, e BEGIN, SAVEPOINT, ROLLBACK TO e COMMIT são TCL.",
      "Saldo 100; UPDATE é DQL, e ROLLBACK TO desfaz também a alteração anterior ao savepoint.",
      "Saldo 80; UPDATE é DCL, e os demais comandos pertencem à DDL."
    ],
    2,
    "O primeiro UPDATE reduz o saldo para 80. O segundo leva a 50, mas ROLLBACK TO s1 o desfaz; COMMIT persiste 80. UPDATE é DML, enquanto os demais controlam a transação (TCL)."
  ]),
  makeQuestion([
    "bruno-massaranduba-2026-difficult-40",
    "Conhecimentos Específicos",
    "Difícil",
    "Uma view de inventário baseada em Setor(id, nome) e Equipamento(id, setor_id) deve listar cada setor e a quantidade de equipamentos, incluindo zero para setores sem equipamentos. Qual consulta atende ao requisito sem transformar a junção externa em interna?",
    [
      "SELECT s.id, s.nome, COUNT(*) FROM Setor s INNER JOIN Equipamento e ON e.setor_id = s.id GROUP BY s.id, s.nome;",
      "SELECT s.id, s.nome, COUNT(e.id) FROM Equipamento e LEFT JOIN Setor s ON s.id = e.setor_id GROUP BY s.id, s.nome;",
      "SELECT s.id, s.nome, COUNT(e.id) FROM Setor s LEFT JOIN Equipamento e ON e.setor_id = s.id GROUP BY s.id, s.nome;",
      "SELECT s.id, s.nome, COUNT(*) FROM Setor s LEFT JOIN Equipamento e ON e.setor_id = s.id WHERE e.id IS NOT NULL GROUP BY s.id, s.nome;",
      "SELECT s.id, s.nome, COUNT(e.id) FROM Setor s RIGHT JOIN Equipamento e ON e.setor_id = s.id GROUP BY s.id, s.nome;"
    ],
    2,
    "Partir de Setor e usar LEFT JOIN preserva todos os setores. COUNT(e.id) ignora o NULL produzido quando não há equipamento, retornando zero, e o GROUP BY mantém uma linha por setor."
  ])
];
