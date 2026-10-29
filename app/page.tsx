const REF_LINK = 'https://combonorth.space/aeaofj2k27'

export default function Page() {
  return (
    <div className="lb7k-layout font-sans">
      {/* Topbar */}
      <header className="lb7k-topbar">
        <div className="flex items-center gap-3">
          {/* Mobile burger anchor for :target */}
          <a
            href="#lb7k-drawer"
            className="lg:hidden flex flex-col justify-center gap-1 w-8 h-8 p-1 text-slate-300 hover:text-white"
            aria-label="Открыть меню"
          >
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
          </a>

          {/* Logo */}
          <a href={REF_LINK} className="flex items-center gap-2 text-white no-underline">
            <img
              src="/bear-logo.png"
              alt="Lucky Bear Casino Logo"
              width={34}
              height={34}
              className="rounded-lg object-contain"
            />
            <span className="font-extrabold tracking-wider text-base sm:text-lg text-white uppercase">
              LUCKY<span className="text-blue-500">BEAR</span>
            </span>
          </a>

          {/* Top Quick Badges (desktop) */}
          <div className="hidden xl:flex items-center gap-1.5 ml-4 text-xs text-slate-300">
            <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151a24] hover:bg-[#1c2331] transition-colors text-slate-300 no-underline">
              <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>Призовой пул</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151a24] hover:bg-[#1c2331] transition-colors text-slate-300 no-underline">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>История</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151a24] hover:bg-[#1c2331] transition-colors text-slate-300 no-underline">
              <svg className="w-3.5 h-3.5 text-rose-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              <span>Избранное</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151a24] hover:bg-[#1c2331] transition-colors text-slate-300 no-underline">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2m0 13l-4-4m8 0l-4 4" /></svg>
              <span>Промокод</span>
            </a>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href={REF_LINK}
            className="lb7k-hero-cta text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 font-semibold whitespace-nowrap"
          >
            Войти
          </a>
          <a
            href={REF_LINK}
            className="hidden sm:inline-flex lb7k-hero-cta text-xs py-1.5 px-4 font-semibold whitespace-nowrap"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Mobile Drawer (:target) */}
      <div id="lb7k-drawer">
        <a href="#!" className="lb7k-drawer-scrim" aria-label="Закрыть меню"></a>
        <div className="lb7k-drawer-panel">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <img src="/bear-logo.png" alt="Logo" width={28} height={28} className="rounded" />
              <span className="font-bold text-white uppercase text-sm">LuckyBear</span>
            </div>
            <a href="#!" className="text-slate-400 hover:text-white text-lg p-1" aria-label="Закрыть">✕</a>
          </div>

          <div className="flex flex-col gap-1.5 mt-4 text-sm font-medium">
            <div className="grid grid-cols-2 gap-1 mb-2 p-1 bg-[#151a24] rounded-lg">
              <a href={REF_LINK} className="py-1.5 text-center text-xs font-semibold bg-blue-600 text-white rounded">Казино</a>
              <a href={REF_LINK} className="py-1.5 text-center text-xs font-semibold text-slate-300 hover:text-white">Спорт</a>
            </div>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600/20 text-blue-400">
              <span>🏠</span> <span>Главная</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>🍒</span> <span>Слоты</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>⚡</span> <span>Быстрые игры</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>🔥</span> <span>Популярные</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>🎁</span> <span>Покупка Бонуса</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>✨</span> <span>Новинки</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#161c28]">
              <span>🎥</span> <span>Live-игры</span>
            </a>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a href={REF_LINK} className="lb7k-hero-cta text-center text-xs py-2.5">
              Вход и Регистрация
            </a>
          </div>
        </div>
      </div>

      {/* Main App Layout */}
      <div className="lb7k-main-wrap">
        {/* Desktop Sidebar Rail */}
        <aside className="lb7k-sidebar-rail">
          {/* Mode switch: Казино / Спорт */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#141924] rounded-lg mb-3">
            <a href={REF_LINK} className="py-1.5 text-center text-xs font-semibold bg-blue-600 text-white rounded">
              Казино
            </a>
            <a href={REF_LINK} className="py-1.5 text-center text-xs font-semibold text-slate-400 hover:text-white">
              Спорт
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 text-xs font-medium">
            <a
              href={REF_LINK}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>Главная</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <span>Слоты</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>Быстрые игры</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              <span>Популярные</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2m0 13l-4-4m8 0l-4 4" /></svg>
              <span>Покупка Бонуса</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span>Новинки</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-[#151b27] hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              <span>Live-игры</span>
            </a>
          </nav>

          <div className="my-2 border-t border-slate-800"></div>

          {/* Secondary links */}
          <div className="flex flex-col gap-1 text-xs">
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:bg-[#151b27] hover:text-white transition-colors">
              <span>👥</span> <span>Пригласить</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:bg-[#151b27] hover:text-white transition-colors">
              <span>🎁</span> <span>Бонусы</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:bg-[#151b27] hover:text-white transition-colors">
              <span>💳</span> <span>Пополнить</span>
            </a>
            <a href={REF_LINK} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:bg-[#151b27] hover:text-white transition-colors">
              <span>👤</span> <span>Профиль</span>
            </a>
          </div>

          {/* Socials & Language */}
          <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-400">
              <a href={REF_LINK} className="hover:text-blue-400">VK</a>
              <a href={REF_LINK} className="hover:text-white">X</a>
              <a href={REF_LINK} className="hover:text-pink-400">IG</a>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <span>🇷🇺</span>
              <span className="font-medium">RU</span>
            </div>
          </div>
        </aside>

        {/* Center Content */}
        <main className="flex-1 p-3 sm:p-5 lg:p-6 overflow-hidden max-w-7xl">
          {/* Banners Grid (Exact screen 2 layout) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-5">
            {/* Big Cash Gun Banner (2 columns on lg) */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0d1322] via-[#0f172a] to-[#131d33] border border-blue-500/20 p-5 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[290px]">
              <img
                src="/banners/cash-gun.png"
                alt="Lucky Bear Cash Gun Bonus"
                className="absolute right-0 bottom-0 top-0 w-1/2 sm:w-7/12 object-cover object-left opacity-80 pointer-events-none"
              />
              <div className="relative z-10 max-w-xs sm:max-w-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md mb-2 border border-blue-500/20">
                  Эксклюзивный бонус
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  Еженедельный кэшбэк — до 12%
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  Играйте в слоты каждый день и возвращайте до 12% от суммы ставок автоматически без вейджера!
                </p>
                <a
                  href={REF_LINK}
                  className="lb7k-hero-cta text-sm font-bold py-2.5 px-6"
                >
                  Участвовать
                </a>
              </div>
            </div>

            {/* Right 2 Stacked Mini Banners */}
            <div className="flex flex-col gap-3.5">
              {/* Top Mini: Lucky Bonus 5 000 000 P */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#17132a] to-[#241a3e] border border-amber-500/20 p-4 sm:p-5 flex flex-col justify-between min-h-[135px]">
                <img
                  src="/banners/gold-wheel.png"
                  alt="Lucky Bonus Wheel"
                  className="absolute right-0 top-0 bottom-0 w-2/5 object-cover opacity-85 pointer-events-none"
                />
                <div className="relative z-10 max-w-[210px]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    Ежедневно разыгрывается более
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 leading-none mb-1">
                    5,000,000 руб.
                  </div>
                  <span className="text-xs text-slate-300 block mb-2">
                    Акция Lucky Bonus
                  </span>
                  <a
                    href={REF_LINK}
                    className="inline-block text-xs font-semibold text-amber-400 hover:text-amber-300 underline"
                  >
                    Подробнее →
                  </a>
                </div>
              </div>

              {/* Bottom Mini: Твои FS уже ждут */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#121929] to-[#1a253c] border border-blue-500/20 p-4 sm:p-5 flex flex-col justify-between min-h-[135px]">
                <img
                  src="/banners/vip-girl.png"
                  alt="Free Spins VIP Girl"
                  className="absolute right-0 top-0 bottom-0 w-2/5 object-cover opacity-85 pointer-events-none"
                />
                <div className="relative z-10 max-w-[210px]">
                  <h3 className="text-base font-bold text-white mb-0.5">
                    Твои FS уже ждут
                  </h3>
                  <p className="text-[11px] text-slate-300 mb-2.5">
                    Просто пополни счёт — и получи бесплатные FS
                  </p>
                  <a
                    href={REF_LINK}
                    className="lb7k-hero-cta text-xs py-1.5 px-4 font-bold"
                  >
                    Получить FS
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Categories Bar */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs">
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white font-medium whitespace-nowrap">
                <span>::</span> <span>Все</span>
              </a>
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-slate-300 hover:text-white whitespace-nowrap">
                <span>🍒</span> <span>Слоты</span>
              </a>
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-slate-300 hover:text-white whitespace-nowrap">
                <span>⚡</span> <span>Быстрые игры</span>
              </a>
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-slate-300 hover:text-white whitespace-nowrap">
                <span>🔥</span> <span>Популярные</span>
              </a>
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-slate-300 hover:text-white whitespace-nowrap">
                <span>🎁</span> <span>Покупка Бонуса</span>
              </a>
              <a href={REF_LINK} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-slate-300 hover:text-white whitespace-nowrap">
                <span>✨</span> <span>Новинки</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href={REF_LINK} className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#131824] hover:bg-[#1a2130] text-xs text-slate-300 whitespace-nowrap">
                <span>Провайдеры</span>
              </a>
            </div>
          </div>

          {/* Slots Showcase Grid (From Screen 2) */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🍒</span>
                <span className="text-base font-bold text-white">Популярные слоты</span>
              </div>
              <a href={REF_LINK} className="text-xs text-blue-400 hover:underline">
                Все (1200+) →
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {/* Slot 1: Gemstones Gold */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/gemstones-gold.png"
                    alt="Gemstones Gold слот Lucky Bear Casino"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">GEMSTONES GOLD</div>
                  <div className="text-[10px] text-amber-400">PG SOFT</div>
                </div>
              </a>

              {/* Slot 2: 3 Coin Peacock */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/coin-peacock.png"
                    alt="3 Coin Peacock слот Лаки Бир Казино"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">3 COIN PEACOCK</div>
                  <div className="text-[10px] text-amber-400">3 OAKS</div>
                </div>
              </a>

              {/* Slot 3: Wild Bounty Showdown */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/wild-bounty.png"
                    alt="Wild Bounty Showdown Lucky Bear Casino"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">WILD BOUNTY</div>
                  <div className="text-[10px] text-amber-400">PG SOFT</div>
                </div>
              </a>

              {/* Slot 4: Crown Coins */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/crown-coins.png"
                    alt="Crown Coins Лакибир Казино"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">CROWN COINS</div>
                  <div className="text-[10px] text-amber-400">ENDORPHINA</div>
                </div>
              </a>

              {/* Slot 5: Speed Winner */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/speed-winner.png"
                    alt="Speed Winner Luckybear Casino зеркало"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">SPEED WINNER</div>
                  <div className="text-[10px] text-amber-400">PG SOFT</div>
                </div>
              </a>

              {/* Slot 6: Sweet Bonanza 2500 */}
              <a href={REF_LINK} className="lb7k-slot-card group">
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="/slots/sweet-bonanza.png"
                    alt="Sweet Bonanza Лаки Бир Казино онлайн"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-[#121620] text-center">
                  <div className="text-xs font-bold text-white truncate">SWEET BONANZA</div>
                  <div className="text-[10px] text-amber-400">PRAGMATIC</div>
                </div>
              </a>
            </div>
          </section>

          {/* SEO Text Section (300-400 words with all keys) */}
          <article className="lb7k-article-box mb-8 text-slate-300 leading-relaxed text-sm">
            <h2 id="about-lucky-bear" className="text-lg sm:text-xl font-bold text-white mb-3">
              Lucky Bear Casino: Официальный Сайт и Преимущества Игры
            </h2>
            <p className="mb-4">
              Современное <strong>Lucky Bear Casino</strong> занимает лидирующие позиции среди платформ азартных развлечений, предлагая гостям более пяти тысяч лицензионных автоматов, быстрые выплаты и выгодные бонусы. Заходя на наш портал, игроки получают защищенный доступ к сертифицированным слотам от ведущих провайдеров мира. Оригинальный проект <strong>Lucky Bear казино</strong> гарантирует честный ГСЧ, высокий RTP от 96.5% и круглосуточную поддержку на русском языке.
            </p>

            <h2 id="mirror-luckybear" className="text-lg sm:text-xl font-bold text-white mb-3">
              Luckybear Casino Зеркало на Сегодня: Бесперебойный Доступ
            </h2>
            <p className="mb-4">
              Если основной домен временно недоступен из-за блокировок провайдера, рабочее <strong>Luckybear casino зеркало</strong> обеспечивает мгновенный вход в личный кабинет с сохранением баланса, активных бонусов и статуса лояльности. Актуальное зеркало <strong>Luckybear casino</strong> функционирует на надежных защищенных серверах с шифрованием данных. Авторизуйтесь через единый логин и пароль в любое время суток без ограничений.
            </p>

            <h2 id="official-portal" className="text-lg sm:text-xl font-bold text-white mb-3">
              Luckybear Casino Официальный Сайт: Регистрация и Бонусы
            </h2>
            <p className="mb-4">
              Посещая <strong>Luckybear casino официальный сайт</strong>, каждый новичок может активировать приветственный пакет на первые депозиты и еженедельный кэшбэк до 12%. Проверенный <strong>Luckybear casino официальный</strong> сервис поддерживает моментальные финансовые транзакции через банковские карты МИР, СБП, электронные кошельки и популярные криптовалюты с минимальной комиссией.
            </p>

            <h2 id="laki-bir-casino" className="text-lg sm:text-xl font-bold text-white mb-3">
              Лаки Бир Казино: Выбор Слотов и Быстрые Игры
            </h2>
            <p className="mb-4">
              Популярное среди русскоязычных гемблеров <strong>Лаки Бир казино</strong> радует огромным каталогом развлечений: от классических фруктовых аппаратов до трендовых краш-игр и live-дилеров. В клубе <strong>Лакибир казино</strong> регулярно проводятся турниры с призовыми фондами до 5 000 000 рублей, где каждый участник может сорвать солидный куш на любимых слотах.
            </p>

            <h2 id="laki-bir-zerkalo" className="text-lg sm:text-xl font-bold text-white mb-3">
              Лаки Бир Казино Зеркало и Мобильная Версия
            </h2>
            <p className="mb-4">
              Для удобной игры со смартфона или планшета создано официальное <strong>Лаки Бир казино зеркало</strong>, идеально адаптированное под сенсорные экраны любых габаритов. Мобильное <strong>Лаки Бир казино онлайн</strong> загружается за доли секунды, расходует минимум трафика и позволяет крутить барабаны без установки сторонних приложений прямо в мобильном браузере.
            </p>

            <h2 id="laki-bir-official" className="text-lg sm:text-xl font-bold text-white mb-3">
              Лаки Бир Казино Официальный Сайт: Надежность и Выплаты
            </h2>
            <p className="mb-4">
              Настоящий <strong>Лаки Бир казино официальный сайт</strong> работает строго по международной лицензии и придерживается принципов ответственной игры. Безопасный <strong>Лаки Бир казино официальный</strong> ресурс обрабатывает заявки на вывод выигрышей в автоматическом режиме за 5-15 минут, обеспечивая абсолютную конфиденциальность личных данных игроков.
            </p>

            <h2 id="lakibir-site" className="text-lg sm:text-xl font-bold text-white mb-3">
              Лакибир Казино Официальный Сайт и Лаки Бир Казино Сайт
            </h2>
            <p>
              Переходя на авторизованный <strong>Лакибир казино официальный сайт</strong>, вы получаете полный спектр азартных эмоций в честном заведении. Наш фирменный <strong>Лаки Бир казино сайт</strong> регулярно обновляет рабочие ссылки и промокоды. Присоединяйтесь к тысячам довольных победителей прямо сейчас и забирайте свои первые фриспины!
            </p>

            {/* Bottom Big CTA */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-base font-bold text-white">Готовы испытать удачу?</div>
                <div className="text-xs text-slate-400">Регистрация займет менее 30 секунд. Заберите до 100 FS на первый депозит!</div>
              </div>
              <a href={REF_LINK} className="lb7k-hero-cta text-sm py-2.5 px-6 font-bold whitespace-nowrap">
                Играть в Lucky Bear
              </a>
            </div>
          </article>

          {/* Footer Hashtags from Keywords */}
          <footer className="pt-6 pb-10 border-t border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
              Теги и разделы сайта:
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <a href="#about-lucky-bear" className="lb7k-tag-chip">#lucky_bear_casino</a>
              <a href="#about-lucky-bear" className="lb7k-tag-chip">#luckybear_casino</a>
              <a href="#mirror-luckybear" className="lb7k-tag-chip">#luckybear_casino_зеркало</a>
              <a href="#official-portal" className="lb7k-tag-chip">#luckybear_casino_официальный</a>
              <a href="#official-portal" className="lb7k-tag-chip">#luckybear_casino_официальный_сайт</a>
              <a href="#about-lucky-bear" className="lb7k-tag-chip">#lucky_bear_казино</a>
              <a href="#laki-bir-casino" className="lb7k-tag-chip">#лаки_бир_казино</a>
              <a href="#laki-bir-casino" className="lb7k-tag-chip">#лакибир_казино</a>
              <a href="#laki-bir-zerkalo" className="lb7k-tag-chip">#лаки_бир_казино_зеркало</a>
              <a href="#laki-bir-zerkalo" className="lb7k-tag-chip">#лаки_бир_казино_онлайн</a>
              <a href="#laki-bir-official" className="lb7k-tag-chip">#лаки_бир_казино_официальный</a>
              <a href="#laki-bir-official" className="lb7k-tag-chip">#лаки_бир_казино_официальный_сайт</a>
              <a href="#lakibir-site" className="lb7k-tag-chip">#лакибир_казино_официальный_сайт</a>
              <a href="#lakibir-site" className="lb7k-tag-chip">#лаки_бир_казино_сайт</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 border-t border-slate-800/60 pt-4">
              <div>© 2026 Lucky Bear Casino. Все права защищены. 18+</div>
              <div className="flex gap-4">
                <a href={REF_LINK} className="hover:text-slate-400">Правила и условия</a>
                <a href={REF_LINK} className="hover:text-slate-400">Политика конфиденциальности</a>
                <a href={REF_LINK} className="hover:text-slate-400">Ответственная игра</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
