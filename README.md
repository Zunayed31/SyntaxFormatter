# SyntaxFormatter

A small Blazor-based web app to quickly format and validate common code and data formats. Paste your code, select a formatter, and get clean, consistent output instantly.

## Key features
- JSON: format, validate and minify JSON with syntax error messages
- JavaScript: beautify JavaScript using js-beautify
- HTML: pretty-print HTML with correct nesting and indentation
- SQL: format MySQL, MSSQL (T-SQL) and Oracle/PLSQL using sql-formatter
- YAML: parse and reserialize YAML using js-yaml

## Tech stack
- .NET 10, Blazor WebAssembly (runs entirely in the browser; hosted on GitHub Pages)
- JavaScript libraries included: js-beautify, sql-formatter, js-yaml
- Static assets and client formatters located in wwwroot

## Run locally
1. Install .NET 10 SDK: https://dotnet.microsoft.com/
2. From repository root run:
   cd SyntaxFormatter
   dotnet build
   dotnet run
3. Open the URL printed by `dotnet run` (see `Properties/launchSettings.json`)

## Deploy to GitHub Pages
Pushing to the `site` branch runs `.github/workflows/deploy-pages.yml`, which publishes the app and deploys it to GitHub Pages.
One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
The site is then served at `https://<user>.github.io/<repo>/`.

## Notes
- The app is a standalone Blazor WebAssembly app; the HTML shell is `wwwroot/index.html`.
- Client-side formatting is implemented in `wwwroot/formatters.js` and relies on third-party libraries loaded in the app shell (`wwwroot/index.html`).

## Contributing
Bug reports and pull requests are welcome. Keep changes small and focused.