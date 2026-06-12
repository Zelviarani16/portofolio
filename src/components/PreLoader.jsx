import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    if (countDone) {
      const fadeTextTimer = setTimeout(() => setFadeText(true), 2500)
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 2000)
      const hideTimer = setTimeout(() => setLoading(false), 3000)
      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          overflow: "hidden",
          background: "#0c0c0f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          transition: "opacity 1s ease",
          opacity: fadeScreen ? 0 : 1,
          pointerEvents: fadeScreen ? "none" : "all",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none" }}>
          <Aurora
            colorStops={["#3b0a6e", "#5b21b6", "#7c3aed"]}
            blend={0.4}
            amplitude={0.8}
            speed={0.4}
          />
        </div>

        <div
          style={{
            transition: "all 1s ease",
            opacity: fadeText ? 0 : 1,
            transform: fadeText ? "scale(0.95)" : "scale(1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "4px", fontSize: "5rem", fontWeight: "800", color: "#fff", lineHeight: "1" }}>
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1.2}
              className="count-up-text"
              onEnd={() => setCountDone(true)}
            />
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#a78bfa",
                marginLeft: "4px",
              }}
            >
              %
            </span>
          </div>
        </div>
      </div>
    )
  )
}

export default PreLoader
