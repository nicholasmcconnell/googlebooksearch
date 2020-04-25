import React from "react";

function Nav() {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">Google Book Search</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item { active: isActive('/search')}">
            <a class="nav-link" href="/search" onClick={handleClick}>Search</a>
          </li>
          <li class="nav-item { active: isActive('/save')}">
            <a class="nav-link" href="/save">Save</a>
          </li>

        </ul>

      </div>
    </nav>

  );
}

export default Nav;
