#!/bin/bash
set -e

echo "🚀 Construindo o projeto..."
npm run build

echo "🚀 Fazendo o deploy para a branch gh-pages..."
npx gh-pages -d dist

echo "✅ Deploy finalizado com sucesso!"