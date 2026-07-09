import React from 'react'

const NavigationBar = () => {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link bg-dark text-light" aria-current="page" href="#"><b>HOME</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-dark text-light" href="./AddProducts"><b>ADD BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-dark text-light" href="./view"><b>VIEW BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-dark text-light"  href="/delete" ><b>DELETE BOOK</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-dark text-light"  href="/search" ><b>SEARCH BOOK</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavigationBar