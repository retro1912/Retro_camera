// ===== スタンプとフレームの設定 =====
// 追加したいときは、画像を images/ に置いて、ここに1行足すだけです。
//
// 【スタンプ（内カメ：顔につくもの）】
//   id      : 重複しない英数字
//   label   : ボタンの下に出る名前（短めに）
//   src     : 画像のパス（透過PNG）
//   anchor  : 付ける場所  head=頭の上 / eyes=両目の間 / nose=鼻 / mouth=口
//   scale   : 大きさ（顔の幅に対する比率。1.0で顔と同じ幅）
//   lift    : 位置の上下調整（顔の幅に対する比率。プラスで上、マイナスで下）
//   bob     : true にすると、ぴょこぴょこ跳ねる
//   thumb   : 選択ボタンに出す絵（省略すると src の画像）
//
// 【複数パーツを1つのスタンプにする（例: 頭の上 + 鼻）】
//   src / anchor / scale / lift / bob の代わりに parts を使います。
//   parts の中身は、1パーツごとに { src, anchor, scale, lift, bob } を書きます。
//   thumb（選択ボタンの絵）は、parts を使うときに指定してください。
//   例:
//   { id: 'combo', label: 'セット', thumb: 'images/stamps/combo-thumb.png',
//     parts: [
//       { src: 'images/stamps/hat.png',  anchor: 'head', scale: 0.6, lift: 0.1, bob: true },
//       { src: 'images/stamps/nose.png', anchor: 'nose', scale: 0.2, lift: 0 }
//     ] },
//
// 【フレーム（画面全体にかぶせるもの）】
//   id / label / src : スタンプと同じ（中央が透明な透過PNG）
//   fit     : 'stretch'=画面いっぱいに引き伸ばす（おすすめ） / 'cover'=縦横比を保って拡大（端が切れることがある）
//
window.APP_CONFIG = {
  maxFaces: 3,

  // 内カメ（自撮り）で固定表示するフレームの id。フレームなしにするときは null。
  // 内カメではスタンプだけを選べます。外カメではフレームを選べます。
  frontFrame: 'navy-ribbon',

  stamps: [
    { id: 'bear',        label: 'クマ',     src: 'images/stamps/bear.png',        anchor: 'head', scale: 0.5,  lift: 0.3, bob: true },
    { id: 'bear-flag',   label: '旗',       src: 'images/stamps/bear-flag.png',   anchor: 'head', scale: 0.55, lift: 0.3, bob: true },
    { id: 'bear-salute', label: '敬礼',     src: 'images/stamps/bear-salute.png', anchor: 'head', scale: 0.45, lift: 0.3, bob: true },
    // 頭の上 + 鼻 のセット（サンプル）
    { id: 'bear-nose',   label: 'クマ+鼻',  thumb: 'images/stamps/bear-nose-thumb.png',
      parts: [
        { src: 'images/stamps/bear.png',     anchor: 'head', scale: 0.5,  lift: 0.3, bob: true },
        { src: 'images/stamps/red-nose.png', anchor: 'nose', scale: 0.22, lift: 0 }
      ] }
  ],

  frames: [
    { id: 'navy-ribbon', label: 'ネイビー', src: 'images/frames/navy-ribbon.png', fit: 'stretch' },
    { id: 'red-dots',    label: 'レッド',   src: 'images/frames/red-dots.png',    fit: 'stretch' }
  ]
};
