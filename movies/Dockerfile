# Use the official OpenJDK 23 base image
FROM eclipse-temurin:23-jdk

# Set the working directory
WORKDIR /app

# Copy the Maven build file and source code
COPY pom.xml .
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Copy the built JAR to the container
COPY target/movies-api-*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
