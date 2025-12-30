function App(){
  return (
    <div class="bg-gray-100 text-gray-800 h-screen w-screen">
      <div class="bg-purple-500 px-6 py-4 flex text-purple-100 justify-between sm:grid-cols-2 md:grid-cols-3">
        <h1 class="text-3xl font-bold">Tailwind Demo</h1>
        <nav class="gap-10 flex flex-col md:flex-row">
        <a href="#" class="hover:text-purple-900">Home</a>
        <a href="#" class="hover:text-purple-900">Features</a>
        <a href="#" class="hover:text-purple-900">Contact</a>
      </nav>
      </div>
      <div>
        <section class="p-6 flex flex-col gap-6 lg:flex-row items-center">
          <div class="flex-1">
            <h2 class="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Welcome to Tailwind CSS</h2>
            <p class="mt-4">Utility-first CSS framework for rapid UI development.</p>
            <button class="mt-4 px-6 py-2 rounded bg-gray-200 hover:bg-gray-500 active:bg-gray-400 transition">Get Started</button>
          </div>
          <div class="flex-1">
            <img src="https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" alt="Hero" class="rounded shadow-lg hover:scale-105 transition-transform duration-300 mt-4 h-50 w-70"/>
          </div>
        </section>
      </div>
      <div>
        <section class="p-6">
          <ul class="list-disc list-inside pl-5 space-y-2">
            <li class="hover:text-blue-600">Utility-first-approach</li>
            <li class="hover:text-blue-600">Responsive design</li>
            <li class="hover:text-blue-600">Hover & Focus states</li>
          </ul>
        </section>
      </div>
      <div>
        <section class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-purple-200 rounded p-4">Feature1</div>
          <div class="bg-purple-200 rounded p-4">Feature2</div>
          <div class="bg-purple-200 rounded p-4">Feature3</div>
          <div class="bg-purple-200 rounded p-4">Feature4</div>
          <div class="bg-purple-200 rounded p-4">Feature5</div>
          <div class="bg-purple-200 rounded p-4">Feature6</div>
        </section>
      </div>
      <div>
        <section class="p-6">
          <table class="min-w-full border border-gray-300">
            <thead class="bg-gray-200">
              <tr>
                <th class="border p-2">Name</th>
                <th class="border p-2">Role</th>
                <th class="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {["Alice", "Bob", "Charlie"].map((name, index)=>(
                <tr
                key={name}
                class={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                >
                  <td class="border p-2">{name}</td>
                  <td class="border p-2">Developer</td>
                  <td class="border p-2">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <div>
        <section class="p-6">
          <form class="bg-white p-6 rounded shadow max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
             <input type="text" placeholder="Email" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
              <input type="password" placeholder="password" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
              <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit</button>
          </form>
        </section>
      </div>
    </div>
  )
}
export default App;


