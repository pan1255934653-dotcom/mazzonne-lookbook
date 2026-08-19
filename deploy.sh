#!/bin/bash
# 一键部署到 GitHub Pages（gh-pages 分支）
# 用法: bash deploy.sh
set -e
cd "$(dirname "$0")"

echo "→ 构建中..."
npm run build

REPO_URL=$(git remote get-url origin)
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

cp -R dist/* "$TMP"/
cd "$TMP"
git init -q -b gh-pages
git -c user.name="mazzonne" -c user.email="mazzonne@local" add -A
git -c user.name="mazzonne" -c user.email="mazzonne@local" commit -qm "deploy: $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$REPO_URL"
# HTTP/1.1 在不稳定网络下比 HTTP/2 更可靠（避免 framing layer 错误）
git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push -qf origin gh-pages

echo "✓ 已部署到 https://pan1255934653-dotcom.github.io/mazzonne-lookbook/"
