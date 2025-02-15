"use client"
import { useEffect, useRef } from "react"

function scrambleText(element, finalText, duration = 3, revealSpeed = 100,   scrambleSpeed = 10) {  //duration = durée de l'enimation ;  revealSpeed = vitesse de la révélation et ScrambleSpeed = vitesse de changement des lettres
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let iterations = Math.ceil(duration * scrambleSpeed);
  const currentText = element.textContent;
  let scrambled = currentText.split("");
  let revealingIndex = 0;

  const updateText = () => {
    scrambled = scrambled.map((char, index) =>
      index < revealingIndex
        ? finalText[index]
        : chars[Math.floor(Math.random() * chars.length)]
    );

    element.textContent = scrambled.join("");

    iterations--;
    if (iterations <= 0) {
      revealText(); 
      return;
    }
    requestAnimationFrame(updateText);
  };

  const revealText = () => {
    if (revealingIndex < finalText.length) {
      scrambled[revealingIndex] = finalText[revealingIndex];
      element.textContent = scrambled.join("");
      revealingIndex++;
      setTimeout(revealText, revealSpeed);
    }
  };

  updateText();
}

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      const headerLinks = headerRef.current.querySelectorAll("a, button")

      // Scrambling automatique au chargement de la page
      headerLinks.forEach((link) => {
        const originalText = link.textContent
        scrambleText(link, originalText, 3) // 3 secondes pour l'animation de scrambling
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Joka731</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                A propos
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projets
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>
          <button className="ml-auto btn btn-outline">Curriculum Vitae</button>
        </div>
      </header>
    </div>
  )
}

