# SyntaxFormatter

A small Blazor-based web app to quickly format and validate common code and data formats. Paste your code, select a formatter, and get clean, consistent output instantly.

## Key features
- JSON: format, validate and minify JSON with syntax error messages
- JavaScript: beautify JavaScript using js-beautify
- HTML: pretty-print HTML with correct nesting and indentation
- SQL: format MySQL, MSSQL (T-SQL) and Oracle/PLSQL using sql-formatter
- YAML: parse and reserialize YAML using js-yaml

## Tech stack
- .NET 10, Blazor (interactive server rendering)
- JavaScript libraries included: js-beautify, sql-formatter, js-yaml
- Static assets and client formatters located in wwwroot

## Run locally
1. Install .NET 10 SDK: https://dotnet.microsoft.com/
2. From repository root run:
   cd SyntaxFormatter
   dotnet build
   dotnet run
3. Open https://localhost:5001 or http://localhost:5000 (default ASP.NET Core ports)

## Docker
A Dockerfile is included. To build and run the container:

  docker build -t syntaxformatter .
  docker run -p 5000:80 syntaxformatter

## Notes
- The app uses Blazor interactive server rendering (see `@rendermode` in pages).
- Client-side formatting is implemented in `wwwroot/formatters.js` and relies on third-party libraries loaded in the app shell (`App.razor`).

## Contributing
Bug reports and pull requests are welcome. Keep changes small and focused.