import React from "react";

// Import images for Exames
import img1 from "./Exames/images/Refrator-oftalmológico-manual.jpg";
import img2 from "./Exames/images/Auto-Tonometro- Corneal.jpg";
import img3 from "./Exames/images/Huvitz-Slit-Lamp.png";
import img4 from "./Exames/images/lâmpada-fenda-sem-contato.jpg";
import img5 from "./Exames/images/oftalmoscopio-indireto-binocular.jpg";
import img6 from "./Exames/images/tonomertia-convencional.jpg";
import img7 from "./Exames/images/tonometro.jpg";
import img8 from "./Exames/images/placas-optometria-daltonismo.jpg";
import img9 from "./Exames/images/topografo.png";
import img10 from "./Exames/images/tomografia.jpg";
import img18 from "./Exames/images/Bioultra.jpg";
import img11 from "./Exames/images/Potencialdeacuidade.png";
import img12 from "./Exames/images/campimetria.jpg";
import img13 from "./Exames/images/curva-tensional-diaria.jpg";
import img14 from "./Exames/images/lupa-ocular.jpg";
import img15 from "./Exames/images/TomografiadeCoerencia.jpg";
import img16 from "./Exames/images/retiografo-portatil.jpg";
import img17 from "./Exames/images/Paquimetro.jpg";
import img19 from "./Exames/images/angifluor.jpeg";
import img20 from "./Exames/images/angi.jpeg";
import img21 from "./Exames/images/oct.jpeg";
import img22 from "./Exames/images/octretina.jpeg";
import img23 from "./Exames/images/estrabismo.jpeg";
import img24 from "./Exames/images/abarrometria.jpeg";
import img25 from "./Exames/images/test-lent.jpeg";

// Import images for Tratamentos
import imgTrat1 from "./Tratamentos/images/catarata.webp";
import imgTrat11 from "./Tratamentos/images/catarata3.jpeg";
import imgTrat2 from "./Tratamentos/images/yaglaser.jpeg";
import imgTrat3 from "./Tratamentos/images/crosslink.jpeg";
import imgTrat4 from "./Tratamentos/images/refrator-laser.jpg";
import imgTrat10 from "./Tratamentos/images/glaucoma.jpeg";
import imgTrat5 from "./Tratamentos/images/slt.jpeg";
import imgTrat6 from "./Tratamentos/images/prsmile2.jpeg";
import imgTrat7 from "./Tratamentos/images/pterigio.jpeg";
import imgTrat8 from "./Tratamentos/images/iridotnia.jpeg";

// Helper to create links consistently
export const createLink = (href, label) => (
    <a href={href} title={label}>
        {label}
    </a>
);


// --- DOENÇAS OCULARES DATA ---
export const catarataLente = [
    {
        id: 1,
        name: "Catarata e Cirurgia de Catarata",
        nikName: createLink("/catarata-cirurgia", "Catarata e Cirurgia de Catarata"),
    },
    {
        id: 2,
        name: "Como escolher sua lente para cirurgia de catarata",
        nikName: createLink(
            "/lentes",
            "Como escolher a lente intraocular para cirurgia de catarata mais adequada para o meu olho?"
        ),
    },
];

export const conjuntiva = [
    {
        id: 2.1,
        name: "Conjuntivites Infecciosas",
        nikName: createLink("/conjutivites-infecciosas", "Conjuntivites Infecciosas"),
    },
    {
        id: 2.2,
        name: "Conjuntivites Alérgicas",
        nikName: createLink("/conjutivites-alergicas", "Conjuntivites Alérgicas"),
    },
    {
        id: 2.3,
        name: "Pterígio",
        nikName: createLink("/pterigio", "Pterígio"),
    },
    {
        id: 2.4,
        name: "Hemorragia subconjuntival",
        nikName: createLink("/hemorragia-subconjuntival", "Hemorragia subconjuntival"),
    },
];

export const corneaData = [
    {
        id: 8,
        name: "Ceratocone",
        nikName: createLink("/ceratocone", "Ceratocone"),
    },
];

export const refracao = [
    {
        id: 7,
        name: "Dicas para te ajudar a escolher seus óculos",
        nikName: createLink("/dica-oculos", "Como escolher seus óculos"),
    },
    {
        id: 7.1,
        name: "Cirurgia refrativa",
        nikName: createLink("/cirurgia-refrativa", "Cirurgia refrativa"),
    }, {
        id: 8,
        name: "Miopia",
        nikName: createLink("/miopia", "Miopia"),
    },
];

export const lentesData = [
    {
        id: 11,
        name: "Instruções para uso e conservação das lentes de contato",
        nikName: createLink(
            "/como-usar-lentes/",
            "Instruções para uso e conservação das lentes de contato"
        ),
    },
];

export const oftalmoPediatria = [
    {
        id: 9,
        name: "Consultas oftalmológicas de rotina na infância",
        nikName: createLink(
            "/dica-pediatria/",
            "Consultas oftalmológicas de rotina na infância"
        ),
    },
    {
        id: 10,
        name: "Cor dos olhos",
        nikName: createLink(
            "/dica-pediatria-cor-olhos/",
            "Como vai ser formada a cor do olho do meu bebê?"
        ),
    },
];

export const olhoSeco = [
    {
        id: 12,
        name: "Olho Seco",
        nikName: createLink(
            "/blefarite-olhos-secos/",
            "Blefarite e Olho Seco"
        ),
    }, {
        id: 13,
        name: "Hordéolo e Calázio",
        nikName: createLink(
            "/hordeolo-calazio/",
            "Hordéolo e Calázio"
        ),
    },
];

export const glaucomaData = [
    {
        id: 13,
        name: "Glaucoma",
        nikName: createLink(
            "/glaucoma/",
            "Glaucoma"
        ),
    },
];

export const retinaVitreo = [
    {
        id: 14,
        name: "Descolamento de Vítreo",
        nikName: createLink(
            "/descolamento-de-vitreo",
            "Descolamento de Vítreo"
        ),
    },
];


// --- EXAMES DATA ---
export const examesConsultas = [
    {
        id: 10,
        name: 'Refratometria (medida do grau dos óculos)',
        nikName: 'Nesse exame, são realizados as medidas do grau dos óculos de forma automática (computadorizada) e manual (refinamento das escolha das lentes pelo próprio paciente, com nossa ajuda). Os resultados são comparados para prescrição do grau final para o paciente.',
        url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
        img: img1,
        imge2: ""
    },
    {
        id: 11,
        name: 'Tonometria convencional  (medida da pressão dos olhos)',
        nikName: " A medida da pressão dos olhos é um exame fundamental para descobrir se o paciente tem glaucoma e para acompanhamento de pacientes com diagnóstico de glaucoma. Também é importante para acompanhamento de inflamações oculares, uso de medicamentos, pós operatórios (entre outras situações que podem alterar a pressão ocular). Sempre que possível, você terá sua pressão intra ocular aferida em suas visitas ao nosso consultório.",
        url: "https://www.keelerusa.com/products/tonometry/kat-tonometer-type-r.html",
        img: img6,
        imge2: img7,
    },
    {
        id: 12,
        name: 'Tonometria de sopro com tecnologia Corneal response technology',
        nikName: 'A tecnologia de medida da pressão por sopro é uma medida de não contato da pressão, ou seja, um jato de ar é jogado no olho e o aparelho mede a pressão analisando o comportamento desse jato de ar em contato com a córnea. É uma forma adicional de medir a pressão ocular que não precisa de colírios anestésicos nem corantes, por isso se torna mais confortável. Nosso tonometro de sopro ainda nos oferece uma medida adicional da pressão ocular, de acordo com a deformação da córnea nos fornecendo mais um parâmetro para nos auxiliar a entender a pressão intra ocular do paciente.',
        url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
        img: img2,
        imge2: ""
    },
    {
        id: 1,
        name: 'Biomicroscopia',
        nikName: 'Neste exame avaliamos com o biomicroscópio e lentes especiais a anatomia tanto da parte anterior quanto do fundo do olho.',
        url: "https://usophthalmic.com/products/hs-5000-5x",
        img: img3,
    },
    {
        id: 2,
        name: 'Mapeamento de retina',
        nikName: "Através desse exame, conseguimos avaliar os detalhes da retina do paciente para descobrir se existem doenças ou alterações retinianas bem como acompanhar o seu tratamento.",
        url: "https://www.eyetec.com.br/equipamento-oftalmoscopio-binocular-indireto",
        img: img4,
        imge2: img5
    },
    {
        id: 4,
        name: 'Exame ortóptico ou teste de estrabismo',
        nikName: 'Este é um teste utilizado para avaliar se o paciente possui algum grau de desvio ocular. É rotineiramente realizado em crianças, que podem ter seu desenvolvimento visual comprometido pelos estrabismos e também realizado em adultos com suspeitas de desvio ocular.',
        url: "https://eyewiki.aao.org/w/images/1/a/ae/AA0_2117.jpg",
        img: img23,
        imge2: "",
    },
    {
        id: 5,
        name: ' Teste de visão de cores',
        url: "",
        nikName: 'Este teste é útil para diagnosticar discromatopsias (daltonismo) bem como avaliar doenças no nervo óptico. Também utilizado em algumas avaliações pré operatórias.',
        img: img8,
        imge2: ""
    },
    {
        id: 6,
        name: 'Teste de estereopsia (avaliação da visão tridimensional)',
        nikName: "Esse teste avalia qual o grau de visão tridimensional do paciente.",
        img: 'https://i.ebayimg.com/images/g/yHcAAOSwYhda-ftT/s-l1600.jpg',
        imge2: ""
    },
];

export const examesCornea = [
    {
        id: 7,
        name: 'Topografia de córnea',
        nikName: 'A topografia de córnea é um exame que avalia a forma e curvatura da córnea do paciente. Ele é extremamente útil e amplamente utilizado para avaliar a córnea do paciente em casos de graus mais moderados a elevados, rastreio e acompanhamento de doenças da córnea (especialmente o ceratocone), pré operatório de cirurgias oculares (pterígio, catarata), acompanhamento do uso de lentes de contato, entre várias outras indicações.',
        img: img9,
        imge2: ""
    },
    {
        id: 9,
        name: ' Tomografia de córnea e Biometria Óptica (Pentacam AXL)',
        nikName: ' A tomografia é uma evolução da topografia. Enquanto a topografia analisa apenas uma foto da sua córnea, a tomografia faz diversas fotos em posições diferentes para fazer uma reconstrução tridimensional da sua córnea. Por isso, ele consegue nos dar informações mais precisas e detalhadas da córnea dos pacientes, sendo muito importante em quase todas as mesmas indicações de topografia de córnea descritas anteriormente. Importante salientar que não são exames excludentes e sim complementares. Por utilizarem tecnologias diferentes para aquisição das imagens, seus resultados são sempre analisados em conjunto para melhor tomada de decisão sobre um caso clínico do paciente.',
        img: img10,
        imge2: ""
    },
    {
        id: 8,
        name: ' Biometria Ultra Sônica',
        url: "https://www.apramed.com.br/v4/produtos_detalhes.php?id=249",
        nikName: 'A biometria é a medida do tamanho do globo ocular e as distâncias entre as estruturas intra oculares (córnea, cristalino e retina). Muito utilizado em conjunto com as medidas da curvatura ocular (topografia e tomografia) para o cálculo da lente intra ocular do paciente. Também utilizamos muito a biometria para pacientes com grau mais elevado, diferença de grau entre os olhos e em algumas avaliações pré operatórias.',
        img: img18,
        imge2: ""
    },
    {
        id: 14,
        name: 'Biometria Óptica (Pentacam AXL)',
        nikName: `
      Esse exame é uma evolução da biometria ultra sônica e utiliza um método mais moderno chamado de interferometria óptica para medir o tamanho do globo ocular (assim como a distância entre a córnea, cristalino e retina) de uma maneira mais precisa que o ultra som.
      `,
        img: "https://oculare.com.br/wp-content/uploads/2018/08/pentacam-axl.jpg",
    },
    {
        id: 13,
        name: ' Microscopia especular de córnea',
        nikName: "Esse exame avalia a camada mais posterior da córnea: o endotélio. Essa camada é fundamental, pois é nela que se encontra as células responsáveis por manter a córnea transparente. Esse exame é muito utilizado em pré e pós operatório de cirurgias oculares, acompanhamento de usuários de lentes de contato bem como pacientes que possuem doenças específicas que acometem essa camada de células (distrofias do endotélio corneano).",
        img: "https://nidek.com.br/wp-content/uploads/2020/09/CEM-530-2.png",
    },
    {
        id: 23,
        name: '  Potencial de acuidade visual (PAM)',
        nikName: 'Exame útil para tentar nos mostrar qual potencial de visão o paciente poderia alcançar após uma determinada cirurgia ocular.',
        img: img11,
        imge2: ''
    },
    {
        id: 21,
        name: 'Paquimetria',
        nikName: "Avalia a espessura da camada córnea que tem íntima relação com a pressão intra ocular.",
        img: img17,
        imge2: ""
    },
    {
        id: 15,
        name: 'Aberrometria',
        nikName: "Este exame é também conhecido como um super auto  refrator. O nosso aberrometro é capaz de avaliar de uma forma mais precisa o grau do paciente bem como as aberrações corneanas e intraoculares. É muito valioso para estudo das doenças corneanas bem como no pré operatório das cirurgias oculares. ",
        img: img24,
        imge: ""
    },
];

export const examesGlaucoma = [
    {
        id: 16,
        name: 'Campimetria computadorizada',
        nikName: "Sabidamente o glaucoma afeta o campo visual dos pacientes com essa doença. Esse exame permite avaliar o campo visual do paciente nos suspeitos e portadores de glaucoma. Também pode ser usado em outras doenças da retina, do nervo óptico e palpebrais.",
        img: img12,
        imge2: ""
    },
    {
        id: 15,
        name: 'Curva diária de pressão ocular',
        nikName: "Nossa pressão intra ocular pode sofrer variações ao longo do dia. Nesse exame, fazemos algumas medidas da pressão ocular ao longo do dia com intuito de avaliar melhor quais seriam essas variações.",
        img: img13,
        imge2: ""
    },
    {
        id: 17,
        name: 'Teste de Sobrecarga Hídrica',
        nikName: "Este teste tem como objetivo causar um estresse nas estruturas de drenagem do nosso olho (após ingestão de uma quantidade de água predeterminada). Logo após, algumas medidas de pressão são realizadas para avaliar o comportamento dessa pressão.",
        img: img13,
        imge2: ""
    },
    {
        id: 18,
        name: 'Gonioscopia',
        nikName: "Esse exame visa avaliar as estruturas de drenagem do olho localizadas em um local denominado ângulo camerular que só pode ser observado através da utilização de lentes com espelhos especiais.",
        img: img14,
        imge2: ""
    },
    {
        id: 19,
        name: "Tomografia de Coerência Óptica",
        nikName: "Esse exame tem como objetivo avaliar a camada de fibras nervosas e camadas de células ganglionares da retina, estruturas que são danificadas no glaucoma e que não são possíveis de serem avaliadas sem esse instrumento.",
        img: img15,
        imge2: ""
    },
    {
        id: 20,
        name: ' Retinografia',
        nikName: " A retinografia é uma foto da sua retina e do nervo óptico que utilizamos para documentar o estado atual das estruturas intra oculares e comparar futuramente.  ",
        img: img16,
        imge2: ""
    },
    {
        id: 21,
        name: 'Paquimetria',
        nikName: "Avalia a espessura da camada córnea que tem íntima relação com a pressão intra ocular.",
        img: img17,
        imge2: ""
    },
];

export const examesRetina = [
    {
        id: 23,
        name: ' Retinografia',
        nikName: "Fotografia para documentação das alterações retinianas.",
        img: img16,
        imge2: ""
    },
    {
        id: 22,
        name: 'Angioflueresceinografia',
        nikName: "Exame que avalia a retina, seus vasos sanguíneos e possíveis lesões da retina e nervo óptico através da injeção de um contraste intra venoso. Após a infusão desse contraste, são tiradas diversas fotos da retina e acompanhamos qual comportamento desse contraste e das estruturas retinianas para nos auxiliar no diagnóstico e acompanhamento das patologias oculares.",
        img: img19,
        imge2: img20
    },
    {
        id: 24,
        name: '  Oct Retina',
        nikName: "O OCT de retina é um tomógrafo capaz de avaliar a retina tirando diversas fotografias da mesma e fazendo reconstruções que simulam cortes histológicos da mesma (analise de cada camada de células de retina) que nos ajudam a identificar precisamente qual parte da retina está danificada para podermos definir qual diagnóstico e qual melhor tratamento.",
        img: img21,
        imge2: img22
    },
];

export const examesLente = [
    {
        id: 3,
        name: 'Teste de lentes de contato gelatinosas, rígidas e esclerais ',
        nikName: `Este é um procedimento indispensável para o paciente que usa óculos e deseja passar a usar também lentes de contato. 
      No dia do seu teste, faremos avaliação da sua córnea para entender a interação dela com a lente de contato, lhe ensinaremos a manusear e cuidar de sua lente de contato e avaliaremos como ficam a visão e o seu conforto com a lente.
      Assim, você poderá obter uma adaptação segura e saudável da sua lente de contato.`,
        url: "",
        img: img25,
        imge2: ''
    },
];


// --- TRATAMENTOS E CIRURGIAS DATA ---
const catarataLink = `
  Nessa cirurgia, retiramos a lente intra ocular natural do olho (cristalino) que está doente 
  para implantar uma lente artificial em seu lugar. 
  Importante destacar que temos os melhores aparelhos disponíveis no mercado para realizar uma cirurgia 
  com os mesmos níveis de segurança alcançados nos melhores centros de oftalmologia do Brasil e do mundo. 
  Para maiores informações, clique abaixo:
  <br /><a class="btn btn-primary mt-2" href="/catarata-cirurgia" target="_blank" rel="noopener noreferrer">Catarata e cirurgia de catarata</a>
  <br /><br />
  Além disso, temos acesso a todas as lentes intra oculares registradas no Brasil, 
  desde as ofertadas pelos planos de saúde até as especiais. 
  Para saber mais sobre lentes intra oculares, clique abaixo:
  <br /><a class="btn btn-primary mt-2" href="/lentes" target="_blank" rel="noopener noreferrer">Como escolher a lente intraocular</a>
`;

export const tratamentosData = [
    {
        title: "CATARATA",
        items: [
            {
                id: 1,
                name: "Cirurgia da catarata com implante de lente intra ocular",
                description: catarataLink,
                images: [imgTrat1, imgTrat11],
                url: ""
            },
            {
                id: 2,
                name: "Yag Laser para capsulotomia",
                description:
                    "Procedimento em que aplicamos um laser na parte posterior da lente intra ocular implantada, com objetivo de eliminar opacidades atrás da lente intra ocular causada pelo crescimento de células do próprio olho e que acabam por embaçar um pouco a visão meses ou anos após a cirurgia de catarata.",
                images: [imgTrat2],
                url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
            },
        ]
    },
    {
        title: "PTERÍGIO",
        items: [
            {
                id: 3,
                name: "Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)",
                description: `Cirurgia para retirar o pterígio (“carne crescida”) dos olhos, com técnica eficaz para evitar recidiva (auto transplante conjuntival) e mais confortável (uso de cola biológica, sem pontos).
          <br /><a class="btn btn-primary mt-2" href="/pterigio" target="_blank" rel="noopener noreferrer">Saiba mais sobre Pterígio</a>`,
                images: [imgTrat7],
            },
        ]
    },
    {
        title: "CIRURGIA REFRATIVA (CORREÇÃO DE GRAU)",
        items: [
            {
                id: 4,
                name: "PRK, LASIK e SMILE",
                description: `Cirurgias para eliminar o grau dos pacientes (miopia, astigmatismo e hipermetropia) e deixá-los mais independentes dos óculos.
          <br/><a class="btn btn-primary mt-2" href="/cirurgia-refrativa" target="_blank" rel="noopener noreferrer">Veja mais aqui</a>`,
                images: [imgTrat6, imgTrat4],
            },
        ]
    },
    {
        title: "CIRURGIA PARA CERATOCONE",
        items: [
            {
                id: 5,
                name: "Anel intra corneano para ceratocone (manual e laser de femtosegundo)",
                description: `Implante de anel intra corneano (anel de Ferrara) para melhorar a forma da córnea em pacientes com ceratocone.
          <br/><a class="btn btn-primary mt-2" href="/ceratocone" target="_blank" rel="noopener noreferrer">Saiba mais aqui</a>`,
                images: [imgTrat4],
            },
            {
                id: 6,
                name: "Cross Linking para ceratocone",
                description: `Cirurgia para estabilizar o ceratocone em pacientes com progressão documentada.
          <br/><a class="btn btn-primary mt-2" href="/ceratocone" target="_blank" rel="noopener noreferrer">Saiba mais aqui</a>`,
                images: [imgTrat3],
            },
        ]
    },
    {
        title: "CIRURGIAS PARA GLAUCOMA",
        items: [
            {
                id: 7,
                name: "Cirurgia de Glaucoma (Trabeculectomia - TREC)",
                description:
                    "Criamos uma pequena abertura no olho (fístula) para reduzir a pressão intra ocular e evitar a progressão da doença.",
                images: [imgTrat10],
            },
            {
                id: 8,
                name: "Laser para Glaucoma (SLT - Trabeculoplastia seletiva)",
                description:
                    "Aplicamos energia controlada na região do trabeculado para aumentar a drenagem do líquido ocular e reduzir a pressão intra ocular.",
                images: [imgTrat5],
                url: "/slt",
            },
            {
                id: 9,
                name: "Iridotomia a laser para Glaucoma",
                description:
                    "Indicada para pacientes com ângulo estreito, com potencial para desenvolver glaucoma de ângulo fechado.",
                images: [imgTrat8],
            },
        ]
    },
];
