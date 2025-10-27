import { supabase } from "../app/utils/supabase";

export default async function Home() {
  const { data: categories } = await supabase.from("categories").select("*");
  const { data: menus } = await supabase.from("menus").select("*");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-md">
          🍜 Menu Gacoan
        </h1>
        <p className="text-gray-700 mt-3 text-lg font-medium">
          Temukan menu favoritmu dan rasakan kelezatan tiada tanding! 💫
        </p>
      </div>

      {/* Kategori & Menu */}
      <div className="space-y-16">
        {categories?.map((cat) => (
          <section key={cat.id}>
            {/* Judul Kategori */}
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 mb-6 uppercase tracking-wide">
              {cat.name}
            </h2>

            {/* Daftar Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {menus
                ?.filter((menu) => menu.category_id === cat.id)
                .map((menu) => (
                  <div
                    key={menu.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-400"
                  >
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        {menu.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-lg font-medium">
                        Rp {menu.price.toLocaleString("id-ID")}
                      </p>
                      <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all shadow-md">
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm border-t border-blue-200 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600">Gacoan Digital Menu</span>{" "}
        — Dibangun dengan 💙 Next.js + Supabase
      </footer>
    </main>
  );
}
