const MATH_QUESTION_DATA = [
  [
    "math-sets-01",
    "Teoria dos Conjuntos",
    "Média",
    "Em uma turma de 80 estudantes, 46 estudam Inglês, 38 estudam Espanhol e 17 estudam as duas línguas. Quantos estudam pelo menos uma das duas línguas?",
    [
      "50",
      "57",
      "63",
      "67",
      "84"
    ],
    3,
    "Pela inclusão-exclusão, 46 + 38 - 17 = 67."
  ],
  [
    "math-sets-02",
    "Teoria dos Conjuntos",
    "Média",
    "Se A = {2, 4, 6, 8} e B = {4, 5, 6, 7}, então A ∩ B é:",
    [
      "{2, 8}",
      "{4, 6}",
      "{4, 5, 6, 7}",
      "{2, 4, 5, 6, 7, 8}",
      "∅"
    ],
    1,
    "A interseção contém apenas os elementos presentes nos dois conjuntos: 4 e 6."
  ],
  [
    "math-sets-03",
    "Teoria dos Conjuntos",
    "Média",
    "Num universo U = {1, 2, 3, 4, 5, 6}, se A = {1, 3, 5}, o complemento de A em U é:",
    [
      "{1, 3, 5}",
      "{2, 4, 6}",
      "{1, 2, 3}",
      "{4, 5, 6}",
      "∅"
    ],
    1,
    "O complemento reúne os elementos de U que não pertencem a A."
  ],
  [
    "math-sets-04",
    "Teoria dos Conjuntos",
    "Difícil",
    "Em uma pesquisa com 120 pessoas, 70 usam o serviço X, 55 usam o serviço Y e 20 não usam nenhum deles. Quantas usam ambos?",
    [
      "5",
      "15",
      "25",
      "35",
      "45"
    ],
    2,
    "Usam ao menos um: 120 - 20 = 100. Logo, a interseção é 70 + 55 - 100 = 25."
  ],
  [
    "math-sets-05",
    "Teoria dos Conjuntos",
    "Fácil",
    "Qual relação é sempre verdadeira se C é subconjunto de A?",
    [
      "A ⊂ C",
      "C ∈ A",
      "C ⊆ A",
      "A ∩ C = ∅",
      "A = C"
    ],
    2,
    "Ser subconjunto significa que cada elemento de C pertence a A, isto é, C ⊆ A."
  ],
  [
    "math-sets-06",
    "Teoria dos Conjuntos",
    "Média",
    "Se n(A) = 28, n(B) = 19 e n(A ∪ B) = 40, então n(A ∩ B) é:",
    [
      "0",
      "5",
      "7",
      "12",
      "47"
    ],
    2,
    "n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Assim, 40 = 28 + 19 - x e x = 7."
  ],
  [
    "math-equations-01",
    "Equações e Funções",
    "Fácil",
    "A soma das raízes da equação x² - 7x + 10 = 0 é:",
    [
      "-10",
      "-7",
      "3",
      "5",
      "7"
    ],
    4,
    "Para ax² + bx + c = 0, a soma das raízes é -b/a. Aqui, -(-7)/1 = 7."
  ],
  [
    "math-equations-02",
    "Equações e Funções",
    "Média",
    "As raízes da equação x² - 5x + 6 = 0 são:",
    [
      "1 e 6",
      "2 e 3",
      "-2 e -3",
      "-1 e -6",
      "3 e 5"
    ],
    1,
    "O produto 2 × 3 é 6 e a soma 2 + 3 é 5."
  ],
  [
    "math-equations-03",
    "Equações e Funções",
    "Média",
    "A equação reduzida obtida de (2x - 1)² = 25 é:",
    [
      "4x² - 4x - 24 = 0",
      "4x² - 4x + 24 = 0",
      "2x² - 2x - 24 = 0",
      "4x² + 4x - 24 = 0",
      "x² - 4x - 24 = 0"
    ],
    0,
    "Expandindo: 4x² - 4x + 1 = 25; portanto, 4x² - 4x - 24 = 0."
  ],
  [
    "math-equations-04",
    "Equações e Funções",
    "Fácil",
    "O valor de x que resolve 3x - 8 = 19 é:",
    [
      "3",
      "7",
      "9",
      "11",
      "27"
    ],
    2,
    "Somando 8 aos dois lados, 3x = 27; dividindo por 3, x = 9."
  ],
  [
    "math-equations-05",
    "Equações e Funções",
    "Média",
    "A função f(x) = x² - 4x + 3 tem valor mínimo igual a:",
    [
      "-4",
      "-1",
      "0",
      "1",
      "3"
    ],
    1,
    "O vértice ocorre em x = 2. Então f(2) = 4 - 8 + 3 = -1."
  ],
  [
    "math-equations-06",
    "Equações e Funções",
    "Difícil",
    "Para que a equação x² + kx + 9 = 0 tenha uma única raiz real, k deve ser:",
    [
      "0",
      "3",
      "6",
      "9",
      "18"
    ],
    2,
    "Uma única raiz real exige discriminante zero: k² - 4·1·9 = 0. Logo, k² = 36 e, entre as opções, k = 6."
  ],
  [
    "math-proportion-01",
    "Razão, Proporção e Porcentagem",
    "Fácil",
    "Um produto custa R$ 240,00 e recebe desconto de 15%. O novo preço é:",
    [
      "R$ 196,00",
      "R$ 204,00",
      "R$ 210,00",
      "R$ 216,00",
      "R$ 225,00"
    ],
    1,
    "15% de 240 é 36. Subtraindo, 240 - 36 = 204."
  ],
  [
    "math-proportion-02",
    "Razão, Proporção e Porcentagem",
    "Média",
    "Em uma receita, a razão entre farinha e açúcar é 5:2. Para 750 g de farinha, a quantidade de açúcar é:",
    [
      "150 g",
      "250 g",
      "300 g",
      "375 g",
      "500 g"
    ],
    2,
    "Se 5 partes correspondem a 750 g, uma parte vale 150 g; duas partes valem 300 g."
  ],
  [
    "math-proportion-03",
    "Razão, Proporção e Porcentagem",
    "Média",
    "Um salário de R$ 2.000,00 recebe aumento de 10% e depois desconto de 10%. O salário final é:",
    [
      "R$ 1.800,00",
      "R$ 1.980,00",
      "R$ 2.000,00",
      "R$ 2.020,00",
      "R$ 2.200,00"
    ],
    1,
    "Após o aumento: 2.200. O desconto de 10% incide sobre 2.200, resultando em 1.980."
  ],
  [
    "math-proportion-04",
    "Razão, Proporção e Porcentagem",
    "Fácil",
    "Se 4 cadernos custam R$ 30,00, mantendo o preço unitário, 10 cadernos custam:",
    [
      "R$ 60,00",
      "R$ 70,00",
      "R$ 75,00",
      "R$ 80,00",
      "R$ 90,00"
    ],
    2,
    "O preço unitário é 30/4 = 7,50. Para 10 unidades: 75,00."
  ],
  [
    "math-proportion-05",
    "Razão, Proporção e Porcentagem",
    "Difícil",
    "Uma turma tem 40 alunos. Se 35% faltaram, quantos compareceram?",
    [
      "14",
      "21",
      "25",
      "26",
      "28"
    ],
    3,
    "Faltaram 0,35 × 40 = 14. Compareceram 40 - 14 = 26."
  ],
  [
    "math-proportion-06",
    "Razão, Proporção e Porcentagem",
    "Média",
    "Uma máquina produz 180 peças em 3 horas, em ritmo constante. Quantas peças produz em 7 horas?",
    [
      "300",
      "360",
      "390",
      "420",
      "540"
    ],
    3,
    "A taxa é 180/3 = 60 peças por hora. Em 7 horas, 60 × 7 = 420."
  ],
  [
    "math-geometry-01",
    "Geometria",
    "Fácil",
    "A soma dos ângulos internos de um triângulo é:",
    [
      "90°",
      "180°",
      "270°",
      "360°",
      "540°"
    ],
    1,
    "Todo triângulo tem soma dos ângulos internos igual a 180°."
  ],
  [
    "math-geometry-02",
    "Geometria",
    "Média",
    "Um triângulo retângulo tem catetos medindo 6 cm e 8 cm. Sua hipotenusa mede:",
    [
      "9 cm",
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    1,
    "Pelo teorema de Pitágoras, h² = 6² + 8² = 100; logo, h = 10."
  ],
  [
    "math-geometry-03",
    "Geometria",
    "Média",
    "A área de um quadrado de lado 9 cm é:",
    [
      "18 cm²",
      "36 cm²",
      "45 cm²",
      "72 cm²",
      "81 cm²"
    ],
    4,
    "A área do quadrado é lado²: 9² = 81 cm²."
  ],
  [
    "math-geometry-04",
    "Geometria",
    "Média",
    "Um retângulo tem perímetro 30 cm e largura 5 cm. O seu comprimento é:",
    [
      "5 cm",
      "10 cm",
      "15 cm",
      "20 cm",
      "25 cm"
    ],
    1,
    "2(c + 5) = 30, então c + 5 = 15 e c = 10."
  ],
  [
    "math-geometry-05",
    "Geometria",
    "Difícil",
    "A área de um triângulo com base 12 cm e altura 7 cm é:",
    [
      "19 cm²",
      "24 cm²",
      "36 cm²",
      "42 cm²",
      "84 cm²"
    ],
    3,
    "A = (base × altura)/2 = (12 × 7)/2 = 42."
  ],
  [
    "math-geometry-06",
    "Geometria",
    "Média",
    "Um círculo de raio 4 cm tem comprimento da circunferência igual a:",
    [
      "4π cm",
      "8π cm",
      "12π cm",
      "16π cm",
      "32π cm"
    ],
    1,
    "O comprimento é 2πr = 2π × 4 = 8π cm."
  ],
  [
    "math-trigonometry-01",
    "Trigonometria",
    "Fácil",
    "π radianos equivalem a:",
    [
      "45°",
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    2,
    "π rad corresponde a meia volta, isto é, 180°."
  ],
  [
    "math-trigonometry-02",
    "Trigonometria",
    "Fácil",
    "90° equivalem a:",
    [
      "π/6 rad",
      "π/4 rad",
      "π/3 rad",
      "π/2 rad",
      "π rad"
    ],
    3,
    "Como 180° = π rad, 90° = π/2 rad."
  ],
  [
    "math-trigonometry-03",
    "Trigonometria",
    "Média",
    "Em um triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa mede 5, o seno do ângulo é:",
    [
      "3/5",
      "4/5",
      "5/3",
      "3/4",
      "5/4"
    ],
    0,
    "Seno é cateto oposto dividido pela hipotenusa: 3/5."
  ],
  [
    "math-trigonometry-04",
    "Trigonometria",
    "Média",
    "O valor de cos 60° é:",
    [
      "0",
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    1,
    "No triângulo notável, cos 60° = 1/2."
  ],
  [
    "math-trigonometry-05",
    "Trigonometria",
    "Média",
    "Uma escada de 10 m forma um ângulo de 30° com o chão. A altura aproximada alcançada, usando sen 30° = 1/2, é:",
    [
      "2,5 m",
      "5 m",
      "5√3 m",
      "8,66 m",
      "10 m"
    ],
    1,
    "A altura é a hipotenusa vezes o seno: 10 × 1/2 = 5 m."
  ],
  [
    "math-trigonometry-06",
    "Trigonometria",
    "Difícil",
    "Se tan θ = 3/4 em um triângulo retângulo e θ é agudo, então sen θ é:",
    [
      "3/5",
      "4/5",
      "3/4",
      "4/3",
      "5/4"
    ],
    0,
    "Com catetos 3 e 4, a hipotenusa é 5. Portanto, sen θ = 3/5."
  ],
  [
    "math-logic-01",
    "Raciocínio Matemático",
    "Média",
    "A média aritmética de 6, 8, 10 e 16 é:",
    [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    2,
    "A soma é 40; dividindo por 4, obtém-se 10."
  ],
  [
    "math-logic-02",
    "Raciocínio Matemático",
    "Média",
    "A mediana do conjunto 3, 7, 9, 12, 15 é:",
    [
      "3",
      "7",
      "9",
      "12",
      "15"
    ],
    2,
    "Com cinco valores ordenados, a mediana é o valor central: 9."
  ],
  [
    "math-logic-03",
    "Raciocínio Matemático",
    "Fácil",
    "Uma sequência começa em 2 e dobra a cada termo: 2, 4, 8, 16, ... O próximo termo é:",
    [
      "18",
      "24",
      "28",
      "30",
      "32"
    ],
    4,
    "Cada termo é o dobro do anterior: 16 × 2 = 32."
  ],
  [
    "math-logic-04",
    "Raciocínio Matemático",
    "Difícil",
    "Uma caixa contém 3 bolas vermelhas, 2 azuis e 5 verdes. A probabilidade de retirar uma bola azul é:",
    [
      "1/10",
      "1/5",
      "1/4",
      "1/3",
      "1/2"
    ],
    1,
    "Há 10 bolas ao todo e 2 azuis: 2/10 = 1/5."
  ],
  [
    "math-logic-05",
    "Raciocínio Matemático",
    "Média",
    "Um capital de R$ 1.000,00 é aplicado a juros simples de 2% ao mês por 5 meses. O montante é:",
    [
      "R$ 1.020,00",
      "R$ 1.050,00",
      "R$ 1.100,00",
      "R$ 1.102,00",
      "R$ 1.200,00"
    ],
    2,
    "Juros simples: J = 1000 × 0,02 × 5 = 100. Montante = 1.100."
  ],
  [
    "math-logic-06",
    "Raciocínio Matemático",
    "Média",
    "Quantos números pares existem no conjunto dos inteiros de 1 até 20, inclusive?",
    [
      "8",
      "9",
      "10",
      "11",
      "20"
    ],
    2,
    "Os pares são 2, 4, ..., 20: há 20/2 = 10 números."
  ]
];

const MATH_QUESTIONS = MATH_QUESTION_DATA.map((question) => makeQuestion(question));

QUESTION_SETS.math.questions = MATH_QUESTIONS;
QUESTION_SETS.math.sources = "Original practice questions informed by the local mathematics exercise material.";
