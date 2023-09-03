# 概要
サーバーサイド Go + フロントエンド Next.jsのモノリスSPAを作るときのテンプレ。
使うかはわからないが、フロントエンドのセットアップに手間取ることが多いのでとりあえずForkしておく。

# 追加したい
- 未使用importの削除
  - プラグインを追加
  ```shell
  yarn add -D prettier-plugin-organize-imports
  ```
  - prettierrcに追加
  ```json
  {"plugins": ["prettier-plugin-organize-imports"]}
  ```
