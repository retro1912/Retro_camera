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

## フレームを足す手順
1. 中央をくり抜いた透過PNGを `images/frames/` に入れる
   （おすすめサイズ: 1080 x 2340。四辺に絵があり、中央は透明）
2. `config.js` の `frames` に1行足す
3. GitHubにアップロードする

## 注意
- ファイル名は半角英数字とハイフンにする（GitHub Pagesは大文字小文字を区別します）
- 画像は1枚あたり数百KB以内にすると、読み込みが速くなります
- 更新が反映されないときは、ブラウザを再読み込みしてください
