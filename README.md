# Retro-Bear AR Camera

## ファイル構成
- `index.html`  本体（ふだんは触らなくてOK）
- `config.js`   スタンプとフレームの一覧（追加・調整はここ）
- `images/stamps/`  内カメ用スタンプ（透過PNG）
- `images/frames/`  外カメ用フレーム（中央が透明な透過PNG）

## スタンプを足す手順
1. 透過PNGを `images/stamps/` に入れる（例: `hat.png`）
2. `config.js` の `stamps` に1行足す
   `{ id: 'hat', label: '帽子', src: 'images/stamps/hat.png', anchor: 'head', scale: 0.6, lift: 0.1, bob: false },`
3. GitHubにアップロードする

anchor は head（頭の上）/ eyes（両目の間）/ nose（鼻）/ mouth（口）。
位置と大きさは scale と lift の数字を変えながら、実機で見て調整します。

## 複数パーツを1つのスタンプにする（頭の上 + 鼻 など）
`src` や `anchor` の代わりに `parts` を使います。選択ボタンの絵は `thumb` で指定します。

    { id: 'combo', label: 'セット', thumb: 'images/stamps/combo-thumb.png',
      parts: [
        { src: 'images/stamps/hat.png',  anchor: 'head', scale: 0.6, lift: 0.1, bob: true },
        { src: 'images/stamps/nose.png', anchor: 'nose', scale: 0.2, lift: 0 }
      ] },

`config.js` の `bear-nose` がサンプルです。パーツの数に決まりはありません。

## フレームを足す手順
1. 中央をくり抜いた透過PNGを `images/frames/` に入れる
   （おすすめサイズ: 1080 x 2340。四辺に絵があり、中央は透明）
2. `config.js` の `frames` に1行足す
3. GitHubにアップロードする

## 内カメのフレームを変える
`config.js` の `frontFrame` に、画像のパスを書きます。

    frontFrame: { src: 'images/frames/navy-ribbon.png', fit: 'stretch' },

このフレームは内カメだけに固定で表示され、スタンプはその上に重なります。
外カメの選択肢（`frames`）には出ません。フレームなしにしたいときは `null` にします。

## 注意
- ファイル名は半角英数字とハイフンにする（GitHub Pagesは大文字小文字を区別します）
- 画像は1枚あたり数百KB以内にすると、読み込みが速くなります
- 更新が反映されないときは、ブラウザを再読み込みしてください
