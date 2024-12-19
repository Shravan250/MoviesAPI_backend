# Use the official OpenJDK 23 base image
FROM eclipse-temurin:23-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy Maven configuration and source files into the container
COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw .
COPY src ./src

# Make Maven wrapper executable and build the application
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Copy the built JAR to the container
COPY target/movies-0.0.1-SNAPSHOT.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
