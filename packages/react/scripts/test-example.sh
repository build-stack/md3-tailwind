#!/bin/bash

# Script to test the example app with the built library

echo "🔨 Building the library..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Library build failed"
    exit 1
fi

echo "✅ Library built successfully"

echo "📦 Installing example dependencies..."
cd examples/react-app
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install example dependencies"
    exit 1
fi

echo "✅ Dependencies installed"

echo "🚀 Starting example development server..."
echo "🌐 Open http://localhost:5173 to view the example"
echo "Press Ctrl+C to stop the server"

npm run dev