FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["SyntaxFormatter/SyntaxFormatter.csproj", "SyntaxFormatter/"]
RUN dotnet restore "SyntaxFormatter/SyntaxFormatter.csproj"
COPY . .
WORKDIR "/src/SyntaxFormatter"
RUN dotnet build "./SyntaxFormatter.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./SyntaxFormatter.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SyntaxFormatter.dll"]
