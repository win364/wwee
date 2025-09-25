# Mines Predictor - Vercel Deployment

Этот проект представляет собой предсказатель для игры Mines, развернутый на Vercel.

## Структура проекта

```
├── api/
│   ├── mines-debug-state.js      # API endpoint для получения состояния игры
│   └── predictor-snapshot.js     # API endpoint для получения snapshot
├── public/
│   ├── predictor.html            # Основной HTML файл (скопируйте сюда)
│   ├── cellsFrame.40eb57f7e28f2ca52ad4.png
│   └── prod-rnd-frontend-php-orchestra.100hp.app/
│       └── static/
│           ├── css/
│           │   └── main.144a5b0d.css
│           └── media/
│               ├── cells-mask.1a7021b147b7851ffef6.svg
│               ├── cellsFrame.40eb57f7e28f2ca52ad4.png
│               └── footer.a650de3af39c3672822e.webp
├── vercel.json                   # Конфигурация Vercel
├── package.json                  # Зависимости проекта
└── README.md                     # Этот файл
```

## Что нужно сделать

1. **Скопируйте predictor.html** в папку `public/`
2. **Замените placeholder файлы** на реальные изображения:
   - `public/cellsFrame.40eb57f7e28f2ca52ad4.png`
   - `public/prod-rnd-frontend-php-orchestra.100hp.app/static/media/cellsFrame.40eb57f7e28f2ca52ad4.png`
   - `public/prod-rnd-frontend-php-orchestra.100hp.app/static/media/footer.a650de3af39c3672822e.webp`

## Развертывание на Vercel

1. Установите Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Войдите в аккаунт Vercel:
   ```bash
   vercel login
   ```

3. Разверните проект:
   ```bash
   vercel
   ```

4. Для продакшена:
   ```bash
   vercel --prod
   ```

## Переменные окружения

В настройках Vercel добавьте переменную окружения:
- `MINES_SERVER_URL` - URL вашего сервера mines (например, `https://your-mines-server.com`)

## API Endpoints

- `GET /mines/debug/state` - Получение состояния игры
- `GET /predictor-snapshot` - Получение snapshot данных
- `GET /` - Основная страница predictor

## Локальная разработка

```bash
npm install
vercel dev
```

Проект будет доступен по адресу `http://localhost:3000`
