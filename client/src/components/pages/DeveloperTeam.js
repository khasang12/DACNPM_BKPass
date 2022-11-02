import data from "./DevTeam.json"
export function DevTeam() {
    return (
        <div className="bg-blue-50">
            <h1 className="font-bold text-2xl p-8">Đội ngũ phát triển</h1>
            <div class="flex flex-wrap justify-center ">
                {data.map(item =>
                    <div class="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 w-full m-6 overflow-hidden sm:w-72">
                        <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Team Member"></img>
                        <h1 class="text-lg text-gray-700">{item.name}</h1>
                        <h3 class="text-sm text-gray-400 "> {item.info}</h3>
                        <div class="text-center text-xs text-gray-400 mt-4 text-center">
                            {item.bio}
                        </div>
                        <a href={item.link} class="btn btn-primary bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Contact me</a>
                    </div>
                )}
            </div>

        </div>

    )
}