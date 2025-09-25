# Mines Predictor - Локальная версия

## 🎯 Описание
Предсказатель для игры Mines, который работает с локальным сервером на `localhost:8080`.

## 🚀 Как запустить

### 1. Запустите локальный сервер
```bash
node predictor-server.js
```
Сервер запустится на `http://localhost:8082`

### 2. Запустите игру на localhost:8080
Убедитесь, что игра Mines работает на `http://localhost:8080`

### 3. Откройте предсказатель
Перейдите на `http://localhost:8082`

## 🌐 Для Vercel деплоя

**ВАЖНО:** Vercel не может обращаться к `localhost:8080` напрямую. 

### Вариант 1: Используйте локальный сервер
- Запустите `node predictor-server.js`
- Откройте `http://localhost:8082`

### Вариант 2: Настройте туннель
Используйте ngrok или cloudflared для создания публичного URL:
```bash
# Установите ngrok
ngrok http 8080

# Или используйте cloudflared
cloudflared tunnel --url http://localhost:8080
```

Затем обновите URL в `api/mines-debug-state.js`:
```javascript
const upstreamUrl = 'https://your-tunnel-url.ngrok.io';
```

## 📁 Структура файлов
- `predictor.html` - основной интерфейс
- `api/mines-debug-state.js` - API прокси
- `vercel.json` - конфигурация Vercel
- `static/` - статические файлы (CSS, изображения)

## 🎮 Как работает предсказание
1. Получает данные с `localhost:8080/mines/debug/state`
2. Анализирует массив `bombs` и `safe`
3. Показывает карту с бомбами (красные крестики) и безопасными ячейками (зеленые звезды)
4. Обновляется каждые 2 секунды

## ⚠️ Ограничения Vercel
- Vercel не может обращаться к `localhost`
- Для работы на Vercel нужен публичный URL для игры
- Лучше использовать локальный сервер `predictor-server.js`
