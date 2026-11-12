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

  // 【位置情報の確認】お店の近くにいる人だけが、カメラを使えるようにします。
  //   lat / lng   : お店の緯度・経度。null のあいだは確認を行いません（開発中はそのままでOK）。
  //                 Googleマップでお店の場所を長押しすると、画面下に「34.xxxx, 135.xxxx」と出ます。
  //   radius      : お店から何メートル以内なら入れるか（店内は電波が弱いので、広めがおすすめ）
  //   maxAccuracy : GPSの誤差を、何メートルまで甘く見るか
  //   passMinutes : 一度通ったあと、何分間は再確認しないか
  //   enabled     : false にすると確認を止められます
  //   helpText    : 入れなかった人に出す一言（例: 'スタッフにお声がけください'）
  gate: {
    enabled: true,
    lat: 34.691695,
    lng: 135.507462,
    radius: 100,
    maxAccuracy: 100,
    passMinutes: 30,
    helpText: '店内でお試しください'
  },

  // 内カメ（自撮り）だけに固定で表示するフレーム。外カメの選択肢には出ません。
  // 内カメではスタンプだけを選べます。フレームなしにするときは null にします。
  frontFrame: { src: 'images/frames/front.png', fit: 'stretch' },

  stamps: [
    { id: 'bear',        label: 'レトロベア',     src: 'images/stamps/bear.png',        anchor: 'head', scale: 1,  lift: 0.3, bob: true },
    { id: 'ribon',   label: 'リボン',       src: 'images/stamps/ribon.png',   anchor: 'head', scale: 1.3, lift: 0, bob: false },
    { id: 'combo', label: 'レトロベア耳',src: 'images/stamps/head.png', anchor: 'head', scale: 1.8, lift: -0.2, bob: false },
      ],

  frames: [
    { id: '01', label: '01', src: 'images/frames/01.png', fit: 'stretch' },
    { id: '02',    label: '02',   src: 'images/frames/02.png',    fit: 'stretch' }
  ]
};
