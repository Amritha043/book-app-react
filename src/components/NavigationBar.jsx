import React from 'react'

const NavigationBar = () => {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary library-navbar shadow ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/"><b>ADD BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/view"><b>VIEW BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="/delete" ><b>DELETE BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="/search" ><b>SEARCH BOOK</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavigationBar