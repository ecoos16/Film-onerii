//tüm sayfalar için ortak başlık, menü ve footer
import './globals.css'
import { FavoritesProvider } from './context/FavoritesContext'
import Link from 'next/link'
import { cookies } from 'next/headers';

// site başlığı ve açıklama
export const metadata = {
  title: 'TavsiyeKutusu',
  description: 'Next.js App Router ile yapılmış film öneri sitesi',
}

export default function RootLayout({ children }) {
  const token = cookies().get('token');
  console.log("token", token);
  return (
    <html lang="tr">
      <body>
        {/* context apıyle fav filmler state i siteye sağlanır */}
        <FavoritesProvider>
          <header style={{ padding: '1rem', backgroundColor: '#222', color: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <h1>İzlenmesi Gerekenler</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Ana Sayfa</Link>
                <span style={{ borderLeft: '1px solid white', height: '19px' }}></span>
                <Link href="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favoriler</Link>
              </nav>

              {/* Routing ve link */}
              {/* Routing ve link */}
              {token ? (
                <form action="/api/films/auth/logout" method="POST">
                  <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Çıkış Yap
                  </button>
                </form>
              ) : (
                <Link href="/admin">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Giriş Yap
                  </button>
                </Link>
              )}

            </div>
          </header>
          {/* chiildren propsu  main alanı her sayfanın içeriğini children gösterir */}
          <main style={{ padding: '1rem' }}>
            {children}
          </main>

          <footer style={{ padding: '1rem', backgroundColor: '#222', color: 'white', textAlign: 'center' }}>
            FÖM
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  )
}
