import './index.css';
function autoResize(e) {
  e.target.style.height = 'auto';
  e.target.style.height = `${e.target.scrollHeight}px`;
}

function App() {
  return (
    <div data-theme="cupcake">
      <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Question</a></li>
              <li><a>Code</a></li>
              <li><a>Photo</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">mind_2.0</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
          <li><a>Question</a></li>
              <li><a>Code</a></li>
              <li><a>Photo</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Home</a>
  </div>
</div>
      </div>
      <body class="prose p-4">
        <h3>Hi</h3>
        <p>What's your name?</p>
      </body>
      <div class="flex justify-center items-center sm:items-start lg:items-center">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">What's your question?</span>
            <span class="label-text-alt">Input anything</span>
          </label>
          <textarea placeholder="Type here" class="input input-bordered w-full max-w-xs custom-textarea" onInput={autoResize}></textarea>
          </div>
      </div>
      
    </div>



  );
}

export default App;
