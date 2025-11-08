

const Header = () => {
    return (
        <header className="w-full bg-[#1E293B] text-white rounded-t-xl px-8 py-4 flex justify-between items-center">
            {/* Логотип / Назва */}
            <h1 className="text-2xl font-semibold tracking-wide">
                Crypto Dashboard
            </h1>

            {/* Меню навігації */}
            <nav>
                <ul className="flex space-x-8 text-lg font-medium">
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">Favorites</li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors flex items-center gap-2">
                        Theme
                        {/* Перемикач теми (імітація) */}

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div
                                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        </label>

                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;