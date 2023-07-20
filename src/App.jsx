import { useEffect } from "react"
import "./App.css"

export default function App() {
  useEffect(() => {
    const inputArea = document.querySelector(".large-area--input")
    const outputArea = document.querySelector(".large-area--output")
    const btnFormat = document.querySelector(".controls__button--format")
    const btnMinify = document.querySelector(".controls__button--minify")

    btnFormat.addEventListener("click", () => {
      const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

      outputArea.value = formatted;
    })

    btnMinify.addEventListener("click", () => {
      const minified = JSON.stringify(JSON.parse(inputArea.value));

      outputArea.value = minified;
    });
  }, [])

  return (
    <div className="container">
      <textarea
        name=""
        id=""
        className="large-area large-area--input"
        placeholder="Enter your JSON here"
      >
      </textarea>

      <div className="controls">
        <button type="button" className="controls__button controls__button--format">Format</button>
        <button type="button" className="controls__button controls__button--minify">Minify</button>
      </div>

      <textarea
        name=""
        id=""
        className="large-area large-area--output"
        placeholder="Your JSON will appear here"
        readOnly
      >
      </textarea>
    </div>
  )
}