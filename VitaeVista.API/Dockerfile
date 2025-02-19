# Use the .NET SDK image for building the API
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the entire API directory, not just the csproj
COPY VitaeVista.API/ VitaeVista.API/

# Restore dependencies
WORKDIR /src/VitaeVista.API
RUN dotnet restore

# Build the application
RUN dotnet build -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Use ASP.NET runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Expose the API port
EXPOSE 8080

# Run the application
ENTRYPOINT ["dotnet", "VitaeVista.API.dll"]
