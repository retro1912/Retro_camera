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

## ファビコン（タブやホーム画面のアイコン）を変える
`images/icons/` の4ファイルを、同じ名前で差し替えます。

- `favicon.ico`  ブラウザのタブ用（16・32・48px入り）
- `favicon-32.png`  32 x 32
- `icon-192.png`  192 x 192（Android用）
- `apple-touch-icon.png`  180 x 180（iPhone・iPadのホーム画面用。透過なしの正方形）

差し替えたあとに反映されないときは、ブラウザのキャッシュが原因です。タブを閉じて開き直してください。

## 位置情報の確認（お店の中だけで遊べるようにする）
`config.js` の `gate` で設定します。`lat` と `lng` が `null` のあいだは、確認を行いません。

1. Googleマップでお店の場所を長押しして、画面下に出る座標（例: `34.6921, 135.5120`）を控える
2. `lat` に前の数字、`lng` に後ろの数字を書く
3. `radius`（お店から何メートル以内か）を決める。最初は 100 がおすすめ
4. GitHubにアップロードする

QRコードには、このサイトのURLをそのまま入れます。QRを読んでも、URLを直接開いても、同じ確認が入ります。

- 入れなかった人には、お店からの距離が小さく表示されます。店内で試して、数字を見ながら `radius` を調整してください
- 一度通ると、`passMinutes`（初期値30分）のあいだは再確認しません。タブを閉じると、また確認します
- 開発中や、確認を止めたいときは `enabled: false` にします

## 注意
- ファイル名は半角英数字とハイフンにする（GitHub Pagesは大文字小文字を区別します）
- 画像は1枚あたり数百KB以内にすると、読み込みが速くなります
- 更新が反映されないときは、ブラウザを再読み込みしてください
