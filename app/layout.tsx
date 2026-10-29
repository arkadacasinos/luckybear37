import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0b0e14]">
      <head>
        <meta charSet="utf-8" />
        <title>Lucky Bear Casino Официальный Сайт | Лаки Бир Казино Зеркало Онлайн</title>
        <meta
          name="description"
          content="Lucky Bear Casino официальный сайт игровых автоматов онлайн. Рабочее зеркало Лаки Бир казино на сегодня: быстрая регистрация, слоты с высоким RTP, еженедельный кэшбэк до 12% и бонусы на баланс."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luckybear37.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://luckybear37.vercel.app/" />
        <meta
          property="og:title"
          content="Lucky Bear Casino Официальный Сайт | Лаки Бир Казино Зеркало Онлайн"
        />
        <meta
          property="og:description"
          content="Lucky Bear Casino официальный сайт игровых автоматов онлайн. Рабочее зеркало Лаки Бир казино на сегодня: слоты с высоким RTP, кэшбэк до 12% и фриспины."
        />
        <meta property="og:image" content="https://luckybear37.vercel.app/banners/cash-gun.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lucky Bear Casino Официальный Сайт | Лаки Бир Казино Зеркало Онлайн"
        />
        <meta
          name="twitter:description"
          content="Lucky Bear Casino официальный сайт игровых автоматов онлайн. Рабочее зеркало Лаки Бир казино на сегодня: слоты с высоким RTP, кэшбэк до 12% и фриспины."
        />
        <meta name="twitter:image" content="https://luckybear37.vercel.app/banners/cash-gun.png" />
        <meta name="theme-color" content="#0b0e14" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased bg-[#0b0e14] text-white">
        {children}
      </body>
    </html>
  )
}
