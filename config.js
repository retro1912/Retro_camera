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
// 【フレーム（外カメ：画面全体にかぶせるもの）】
//   id / label / src : スタンプと同じ（中央が透明な透過PNG）
//   fit     : 'stretch'=画面いっぱいに引き伸ばす（おすすめ） / 'cover'=縦横比を保って拡大（端が切れることがある）
//
window.APP_CONFIG = {
  maxFaces: 3,

  stamps: [
    { id: 'bear',        label: 'レトロベア',     src: 'images/stamps/bear.png',        anchor: 'head', scale: 1,  lift: 0.3, bob: true },
    { id: 'ribon',   label: 'リボン',       src: 'images/stamps/ribon.png',   anchor: 'head', scale: 1.3, lift: 0, bob: false },
    { id: 'combo', label: 'レトロベア耳',  thumb: 'images/stamps/combo.png',
      parts:[
          { src: 'images/stamps/head.png', anchor: 'head', scale: 1.8, lift: -0.2, bob: false },
          { src: 'images/stamps/mouth.png', anchor: 'nose', scale: 0.5 , lift: 0, bob: false}
      ] },
  ],

  frames: [
    { id: '01', label: '01', src: 'images/frames/01.png', fit: 'stretch' },
    { id: '02',    label: '02',   src: 'images/frames/02.png',    fit: 'stretch' }
  ]
};
