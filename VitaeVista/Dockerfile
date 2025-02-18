# Base image for running the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

# Create a non-root user and group for security
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Ensure Data Protection keys directory exists and has correct ownership
RUN mkdir -p /home/app/.aspnet/DataProtection-Keys \
    && chown -R appuser:appgroup /home/app/.aspnet/DataProtection-Keys

# Expose necessary ports
EXPOSE 8080
EXPOSE 8081

# SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=${BUILD_CONFIGURATION:-Debug}
WORKDIR /src

# Copy entire solution and restore dependencies
COPY . .
WORKDIR "/src/VitaeVista"
RUN dotnet restore

# Build the application
RUN dotnet build -c $BUILD_CONFIGURATION -o /app/build

# Publish the application
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Final runtime container
FROM base AS final
WORKDIR /app

# Copy published files
COPY --from=publish /app/publish .

# Switch to non-root user
USER appuser

# Run the application
ENTRYPOINT ["dotnet", "VitaeVista.dll"]
