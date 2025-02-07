"use client"
import { useEffect, useRef } from "react"

function scrambleText(element, finalText, duration = 3) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let iterations = Math.ceil(duration * 30)
  const currentText = element.textContent
  let scrambled = ""

  const updateText = () => {
    scrambled = currentText
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")

    element.textContent = scrambled

    iterations--
    if (iterations <= 0) {
      element.textContent = finalText // Remet le texte normal
      return
    }
    requestAnimationFrame(updateText)
  }

  updateText()
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

