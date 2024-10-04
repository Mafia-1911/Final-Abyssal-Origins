import React from 'react'

const Hero = () => {
  const redirectToGame = () => {
    window.location.href = 'https://mafia-1911.github.io/final-game-build/'; // Replace with the desired URL
  }
  return (
    <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>Explore the Depths of the Sea</h1>
      <p>Discover the wonders of the ocean, learn about marine life, and explore underwater ecosystems.</p>
      <button class="btn btn-pimary" onClick={redirectToGame}>PLAY THE GAME</button>
    </div>
  </section>
  )
}

export default Hero;