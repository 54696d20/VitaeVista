# Use Debian-based .NET 8 runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY . .
EXPOSE 8081
CMD ["dotnet", "VitaeVista.API.dll"]

# SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Debug
WORKDIR /src

# Copy and restore dependencies
COPY ["VitaeVista.API/VitaeVista.API.csproj", "VitaeVista.API/"]
RUN dotnet restore "VitaeVista.API/VitaeVista.API.csproj"

# Copy the full application source
COPY . .
WORKDIR "/src/VitaeVista.API"

# Build the application
RUN dotnet build "VitaeVista.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "VitaeVista.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the final runtime image
FROM base AS final
WORKDIR /app

# ✅ Apply correct permissions before switching users
COPY --from=publish /app/publish /app
RUN chmod -R 777 /app 

# Create a non-root user
RUN useradd -m appuser
USER appuser

# ✅ Force API to listen on correct port
ENV ASPNETCORE_URLS=http://+:8081

# Run the application
ENTRYPOINT ["dotnet", "VitaeVista.API.dll"]
