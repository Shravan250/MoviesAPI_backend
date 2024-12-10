# Use the official OpenJDK 23 base image
FROM eclipse-temurin:23-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the build artifact (JAR file) into the container
COPY target/movies-api-*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
