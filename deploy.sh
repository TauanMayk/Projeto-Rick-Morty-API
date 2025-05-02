#!/bin/bash

# Parar o script se der erro
set -e

echo "🚀 Construindo o projeto..."
npm run build

echo "🚀 Fazendo o deploy para a branch gh-pages..."
npm run deploy

echo "✅ Deploy finalizado!"