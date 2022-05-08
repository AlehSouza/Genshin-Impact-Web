import {
  KamisatoAyakaImage,
  KamisatoAyatoImage,
  YaeMikoImage,
  AlbedoImage,
  AmberImage,
  AratakiIttoImage,
  BarbaraImage,
  BeidouImage,
  BennettImage,
  ChongyunImage,
  DilucImage,
  DionaImage,
  EulaImage,
  FischlImage,
  GanyuImage,
  GorouImage,
  HuTaoImage,
  JeanImage,
  KaedeharaKazuhaImage,
  KaeyaImage,
  KeqingImage,
  KleeImage,
  KujouSaraImage,
  LisaImage,
  MonaImage,
  NigguangImage,
  NoelleImage,
  QiqiImage,
  RaidenShogunImage,
  RazorImage,
  RosariaImage,
  SangonomiyaKokomiImage,
  SayuImage,
  ShenheImage,
  SucroseImage,
  TartagliaImage,
  ThomaImage,
  VentiImage,
  XianglingImage,
  XiaoImage,
  XingqiuImage,
  XinyanImage,
  YanfeiImage,
  YoimiyaImage,
  YunJinImage,
  ZhongliImage,
  YelanImage,
  TravelerImage
} from '../assets/index'

const CharactersGenshin = [
  {
    id: 0,
    name: 'Kamisato Ayaka',
    vision: 'Cryo',
    weapon: 'Sword',
    birthday: '28/09',
    stars: 5,
    region: 'Inazuma',
    image: KamisatoAyakaImage,
    desc: 'Ela é a filha mais velha do clã Kamisato e irmã mais nova de Kamisato Ayato. Sendo bonitas, elegantes e graciosas, as pessoas comuns não têm nada para falar mal de Ayaka. Por causa de seu status social dela como a filha mais velha do Clã Kamisato da Comissão Yashiro e como Shirasagi Himegimi, Ayaka é vista como um modelo de perfeição.',
    skills: [
      {
        id: 0,
        name: 'Kamisato Art: Kabuki',
        key: 'Auto-Attack',
        desc: 'Executa até 5 golpes rápidos.'
      },
      {
        id: 1,
        name: 'Kamisato Art: Hyouka',
        key: 'E',
        desc: 'Evoca gelo florescente para lançar oponentes próximos, causando dano'
      },
      {
        id: 2,
        name: 'Kamisato Art: Senho',
        key: 'Dash',
        desc: 'Ayaka consome Stamina e se cobre em uma névoa congelada que se move com ela. Na forma de Senho, ela se move rapidamente sobre a água. Quando ela reaparece, ocorrem os seguintes efeitos: Ayaka libera energia frígida para aplicar Cryo em oponentes próximos. A frieza se condensa ao redor da lâmina de Ayaka, infundindo seus ataques com Cryo por um breve período.'
      },
      {
        id: 3,
        name: 'Kamisato Art: Soumetsu',
        key: 'Q',
        desc: 'Convoca uma tempestade de neve com equilíbrio impecável, liberando um Frostflake Seki no To que avança continuamente.'
      }
    ]
  },
  {
    id: 1,
    name: 'Kamisato Ayato',
    vision: 'Hydro',
    weapon: 'Sword',
    birthday: '26/03',
    stars: 5,
    region: 'Inazuma',
    image: KamisatoAyatoImage,
    desc: 'Ele é o atual chefe do clã Kamisato, o irmão mais velho de Kamisato Ayaka e o Comissário Yashiro.',
    skills: [
      {
        id: 0,
        name: 'Kamisato Art: Marobashi',
        key: 'Auto-Attack',
        desc: 'Executa até 5 golpes rápidos.'
      },
      {
        id: 1,
        name: 'Kamisato Art: Kyouka',
        key: 'E',
        desc: 'Kamisato Ayato muda de posição e entra no estado Takimeguri Kanka. Após essa mudança, ele deixará uma ilusão aquosa em seu local original. Depois de formada, a ilusão aquosa explodirá se os oponentes estiverem próximos ou após o término de sua duração, causando AoE Hydro DMG.'
      },
      {
        id: 2,
        name: 'Kamisato Art: Suiyuu',
        key: 'Q',
        desc: 'Desvenda um jardim de pureza que silencia a cacofonia interior. Enquanto este espaço existir, Bloomwater Blades irá constantemente chover e atacar oponentes dentro de seu AoE, causando Hydro DMG e aumentando o DMG de Ataque Normal dos personagens dentro.'
      }
    ]
  },
  {
    id: 2,
    name: 'Yae Miko',
    vision: 'Electro',
    weapon: 'Catalyst',
    birthday: '27/06',
    stars: 5,
    region: 'Inazuma',
    image: YaeMikoImage,
    skills: [
      {
        id: 0,
        name: 'Spiritfox Sin-Eater',
        key: 'Auto-Attack',
        desc: 'Evoca espíritos kitsune, iniciando um máximo de 3 ataques que causam Electro DMG.'
      },
      {
        id: 1,
        name: 'Yakan Evocation: Sesshou Sakura',
        key: 'E',
        desc: 'Para Yae, as tarefas monótonas que podem ser realizadas expulsando os espíritos não precisam ser feitas pessoalmente. Move-se rapidamente, deixando um Sesshou Sakura para trás.'
      },
      {
        id: 2,
        name: 'Great Secret Art: Tenko Kenshin',
        key: 'Q',
        desc: 'Lendas de "kitsunetsuki", ou as manifestações do poder de um kitsune, são comuns nos contos folclóricos de Inazuma. Um que particularmente captura a imaginação é o do Sky Kitsune, que diz fazer com que os raios caiam sobre os inimigos do Grande Santuário Narukami. Invoca um relâmpago, causando AoE Electro DMG.'
      }
    ]
  },
  {
    id: 3,
    name: 'Albedo',
    vision: 'Geo',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: AlbedoImage
  },
  {
    id: 4,
    name: 'Amber',
    vision: 'Pyro',
    weapon: 'Bow',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: AmberImage
  },
  {
    id: 5,
    name: 'Arataki Itto',
    vision: 'Geo',
    weapon: 'Claymore',
    birthday: '',
    stars: 5,
    region: 'Inazuma',
    image: AratakiIttoImage
  },
  {
    id: 6,
    name: 'Barbara',
    vision: 'Hydro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: BarbaraImage
  },
  {
    id: 7,
    name: 'Beidou',
    vision: 'Electro',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: BeidouImage
  },
  {
    id: 8,
    name: 'Bennett',
    vision: 'Pyro',
    weapon: 'Sword',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: BennettImage
  },
  {
    id: 9,
    name: 'Chongyun',
    vision: 'Cryo',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: ChongyunImage
  },
  {
    id: 10,
    name: 'Diluc',
    vision: 'Pyro',
    weapon: 'Claymore',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: DilucImage
  },
  {
    id: 11,
    name: 'Diona',
    vision: 'Cryo',
    weapon: 'Bow',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: DionaImage
  },
  {
    id: 12,
    name: 'Eula',
    vision: 'Cryo',
    weapon: 'Claymore',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: EulaImage
  },
  {
    id: 13,
    name: 'Fischl',
    vision: 'Electro',
    weapon: 'Bow',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: FischlImage
  },
  {
    id: 14,
    name: 'Ganyu',
    vision: 'Cryo',
    weapon: 'Bow',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: GanyuImage
  },
  {
    id: 15,
    name: 'Gorou',
    vision: 'Geo',
    weapon: 'Bow',
    birthday: '',
    stars: 4,
    region: 'Inazuma',
    image: GorouImage
  },
  {
    id: 16,
    name: 'Hu Tao',
    vision: 'Pyro',
    weapon: 'Polearm',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: HuTaoImage
  },
  {
    id: 17,
    name: 'Jean',
    vision: 'Anemo',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: JeanImage
  },
  {
    id: 18,
    name: 'Kaedehara Kazuha',
    vision: 'Anemo',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'Inazuma',
    image: KaedeharaKazuhaImage
  },
  {
    id: 19,
    name: 'Kaeya',
    vision: 'Cryo',
    weapon: 'Sword',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: KaeyaImage
  },
  {
    id: 20,
    name: 'Keqing',
    vision: 'Electro',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: KeqingImage
  },
  {
    id: 21,
    name: 'Klee',
    vision: 'Pyro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 5,
    region: 'Mondstad',
    image: KleeImage
  },
  {
    id: 22,
    name: 'Kujou Sara',
    vision: 'Electro',
    weapon: 'Bow',
    birthday: '',
    stars: 4,
    region: 'Inazuma',
    image: KujouSaraImage
  },
  {
    id: 23,
    name: 'Lisa',
    vision: 'Electro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: LisaImage
  },
  {
    id: 24,
    name: 'Mona',
    vision: 'Hydro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: MonaImage
  },
  {
    id: 25,
    name: 'Nigguang',
    vision: 'Geo',
    weapon: 'Catalyst',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: NigguangImage
  },
  {
    id: 26,
    name: 'Noelle',
    vision: 'Geo',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: NoelleImage
  },
  {
    id: 27,
    name: 'Qiqi',
    vision: 'Cryo',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: QiqiImage
  },
  {
    id: 28,
    name: 'Raiden Shogun',
    vision: 'Electro',
    weapon: 'Polearm',
    birthday: '',
    stars: 5,
    region: 'Inazuma',
    image: RaidenShogunImage
  },
  {
    id: 29,
    name: 'Razor',
    vision: 'Electro',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: RazorImage
  },
  {
    id: 30,
    name: 'Rosaria',
    vision: 'Cryo',
    weapon: 'Polearm',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: RosariaImage
  },
  {
    id: 31,
    name: 'Sangonomiya Kokomi',
    vision: 'Hydro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 5,
    region: 'Inazuma',
    image: SangonomiyaKokomiImage
  },
  {
    id: 32,
    name: 'Sayu',
    vision: 'Anemo',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Inazuma',
    image: SayuImage
  },
  {
    id: 33,
    name: 'Shenhe',
    vision: 'Cryo',
    weapon: 'Polearm',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: ShenheImage
  },
  {
    id: 34,
    name: 'Sucrose',
    vision: 'Anemo',
    weapon: 'Catalyst',
    birthday: '',
    stars: 4,
    region: 'Mondstadt',
    image: SucroseImage
  },
  {
    id: 35,
    name: 'Tartaglia',
    vision: 'Hydro',
    weapon: 'Bow',
    birthday: '',
    stars: 5,
    region: 'Snezhnaya',
    image: TartagliaImage
  },
  {
    id: 36,
    name: 'Thoma',
    vision: 'Pyro',
    weapon: 'Polearm',
    birthday: '',
    stars: 4,
    region: 'Inazuma',
    image: ThomaImage
  },
  {
    id: 37,
    name: 'Venti',
    vision: 'Anemo',
    weapon: 'bow',
    birthday: '',
    stars: 5,
    region: 'Mondstadt',
    image: VentiImage
  },
  {
    id: 38,
    name: 'Xiangling',
    vision: 'Pyro',
    weapon: 'Polearm',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: XianglingImage
  },
  {
    id: 39,
    name: 'Xiao',
    vision: 'Anemo',
    weapon: 'Polearm',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: XiaoImage
  },
  {
    id: 40,
    name: 'Xingqiu',
    vision: 'Hydro',
    weapon: 'Sword',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: XingqiuImage
  },
  {
    id: 41,
    name: 'Xinyan',
    vision: 'Pyro',
    weapon: 'Claymore',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: XinyanImage
  },
  {
    id: 42,
    name: 'Yanfei',
    vision: 'Pyro',
    weapon: 'Catalyst',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: YanfeiImage
  },
  {
    id: 43,
    name: 'Yoimiya',
    vision: 'Pyro',
    weapon: 'Bow',
    birthday: '',
    stars: 5,
    region: 'Inazuma',
    image: YoimiyaImage
  },
  {
    id: 44,
    name: 'Yun Jin',
    vision: 'Geo',
    weapon: 'Polearm',
    birthday: '',
    stars: 4,
    region: 'Liyue',
    image: YunJinImage
  },
  {
    id: 45,
    name: 'Zhongli',
    vision: 'Geo',
    weapon: 'Polearm',
    birthday: '',
    stars: 5,
    region: 'Liyue',
    image: ZhongliImage
  },
  {
    id: 46,
    name: 'Yelan',
    vision: 'Hydro',
    weapon: 'Bow',
    birthday: '',
    stars: 5,
    region: '',
    image: YelanImage
  },
  {
    id: 47,
    name: 'Traveler',
    vision: 'None',
    weapon: 'Sword',
    birthday: '',
    stars: 5,
    region: 'None',
    image: TravelerImage
  }
]

export default CharactersGenshin
