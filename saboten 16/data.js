/* =====================================================
   SABOTEN サイト共通データファイル
   アーティスト・ネイル写真を一括管理。
   HOME画面のTATTOO/NAILサムネイルはここからランダム取得されます。
===================================================== */

/* ★ アーティスト追加・削除はここだけ編集
   imgs: 写真3枚のパス。例: ['images/kisa1.jpg','images/kisa2.jpg','images/kisa3.jpg']
   写真がない場合は [] のまま */
const ARTISTS = [
  {name:'KISA',ig:'@_tokyotattoo',igUrl:'https://instagram.com/_tokyotattoo',desc:'ブラックワーク・ファインラインを得意とする。繊細なラインと大胆な構図が特徴。',imgs:['images/kisa1.jpg','images/kisa2.jpg','images/kisa3.jpg']},
  {name:'SEA',ig:'@sea_hirayama',igUrl:'https://instagram.com/sea_hirayama',desc:'フローラル・ネイチャー系。自然モチーフを得意とする。',imgs:['images/sea1.jpg','images/sea2.jpg','images/sea3.jpg']},
  {name:'ABYSS',ig:'@iwishyouwerehereforever',igUrl:'https://instagram.com/iwishyouwerehereforever',desc:'',imgs:['images/abyss1.jpg','images/abyss2.jpg','images/abyss3.jpg']},
  {name:'NEE.',ig:'@nee._tattoo',igUrl:'https://instagram.com/nee._tattoo',desc:'ミニマル・ジオメトリックスタイル。シンプルで洗練されたデザイン。',imgs:['images/nee1.jpg','images/nee2.jpg','images/nee3.jpg']},
  {name:'YURIE',ig:'@yurie.0_o',igUrl:'https://instagram.com/yurie.0_o',desc:'ファインライン・レタリング。繊細なディテールを得意とする。',imgs:['images/yurie1.jpg','images/yurie2.jpg','images/yurie3.jpg']},
  {name:'TOI',ig:'@ppppp101qqqqq',igUrl:'https://instagram.com/ppppp101qqqqq',desc:'',imgs:['images/toi1.jpg','images/toi2.jpg','images/toi3.jpg']},
  {name:'NEKONE KYOKO',ig:'@nekonekyoko',igUrl:'https://instagram.com/nekonekyoko',desc:'カラーワーク・ポップスタイル。鮮やかな発色が特徴。',imgs:['images/nekone1.jpg','images/nekone2.jpg','images/nekone3.jpg']},
  {name:'DANIEL',ig:'@danierutattoo',igUrl:'https://instagram.com/danierutattoo',desc:'',imgs:['images/daniel1.jpg','images/daniel2.jpg','images/daniel3.jpg']},
  {name:'JIJI',ig:'@marotaboi',igUrl:'https://instagram.com/marotaboi',desc:'',imgs:['images/jiji1.jpg','images/jiji2.jpg','images/jiji3.jpg']},
  {name:'SOKI',ig:'@soki_kambara',igUrl:'https://instagram.com/soki_kambara',desc:'',imgs:['images/soki1.jpg','images/soki2.jpg','images/soki3.jpg']},
  {name:'ALISSA',ig:'@alysseterna1',igUrl:'https://instagram.com/alysseterna1',desc:'ヨーロッパ出身。装飾的・エレガントなスタイルが得意。',imgs:['images/alissa1.jpg','images/alissa2.jpg','images/alissa3.jpg']},
  {name:'TSUBAKI',ig:'@blrqttz',igUrl:'https://instagram.com/blrqttz',desc:'パターン・装飾的なデザインを専門とする。',imgs:['images/tsubaki1.jpg','images/tsubaki2.jpg']},
  {name:'NAKAYAMA',ig:'@nrntru',igUrl:'https://instagram.com/nrntru',desc:'オリジナルデザインを中心に、幅広いスタイルに対応。',imgs:['images/nakayama1.jpg','images/nakayama2.jpg','images/nakayama3.jpg']},
  {name:'SAKURA',ig:'@02sa_tattoo',igUrl:'https://instagram.com/02sa_tattoo',desc:'ウォーターカラー・フローラル。柔らかな色使いと繊細なデザインが得意。',imgs:['images/sakura1.jpg','images/sakura2.jpg','images/sakura3.jpg']},
  {name:'KAYA',ig:'@gigigigiggy',igUrl:'https://instagram.com/gigigigiggy',desc:'',imgs:['images/kaya1.jpg','images/kaya2.jpg','images/kaya3.jpg']},
  {name:'SEI',ig:'@lili_ijll',igUrl:'https://instagram.com/lili_ijll',desc:'',imgs:['images/sei1.jpg','images/sei2.jpg','images/sei3.jpg']},
  {name:'RAI',ig:'@tokyoaddiction',igUrl:'https://instagram.com/tokyoaddiction',desc:'',imgs:['images/rai1.jpg','images/rai2.jpg','images/rai3.jpg']},
  {name:'NAMI',ig:'@nami10g',igUrl:'https://instagram.com/nami10g',desc:'ポートレート・リアリズム。繊細な陰影表現が得意。',imgs:['images/nami1.jpg','images/nami2.jpg','images/nami3.jpg']},
  {name:'ARMAINE',ig:'@lunarose.tatt',igUrl:'https://instagram.com/lunarose.tatt',desc:'',imgs:['images/armaine1.jpg','images/armaine2.jpg','images/armaine3.jpg']},
  {name:'KAI',ig:'@kaitattooer',igUrl:'https://instagram.com/kaitattooer',desc:'',imgs:['images/kai1.jpg','images/kai2.jpg','images/kai3.jpg']},
  {name:'AKIRA',ig:'@whodisturbsthedead',igUrl:'https://instagram.com/whodisturbsthedead',desc:'',imgs:['images/akira1.jpg','images/akira2.jpg','images/akira3.jpg']},
  {name:'NAYU',ig:'@nmtat_00',igUrl:'https://instagram.com/nmtat_00',desc:'',imgs:['images/nayu1.jpg','images/nayu2.jpg','images/nayu3.jpg']},
  {name:'ITO',ig:'@ticomeba.tato',igUrl:'https://instagram.com/ticomeba.tato',desc:'',imgs:['images/ito1.jpg','images/ito2.jpg','images/ito3.jpg']},
];

/* ★ ネイル写真追加方法
   配列に画像パスを追加するだけ。例: 'images/nail1.jpg' */
const NAIL_IMAGES = [
  // 'images/nail1.jpg',
  // 'images/nail2.jpg',
];

/* ===== HELPER: 全アーティストの画像をフラットな配列にして1枚ランダム取得 ===== */
function getRandomTattooImage() {
  const allImgs = ARTISTS.flatMap(a => a.imgs || []);
  if (allImgs.length === 0) return null;
  return allImgs[Math.floor(Math.random() * allImgs.length)];
}

function getRandomNailImage() {
  if (NAIL_IMAGES.length === 0) return null;
  return NAIL_IMAGES[Math.floor(Math.random() * NAIL_IMAGES.length)];
}
