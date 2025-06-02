pipeline {
    agent { label 'Jenkins-Agent' }
    // environment {
        // DOCKER_CREDENTIALS = 'docker'
    // }

    stages {
        stage('Checkout from Git') {
            steps {
            git branch: 'main', changelog: false, credentialsId: 'github', poll: false, url: 'https://github.com/VinoaN/Sample_Node_Project.git'

            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    cd /backend
                    // Ensure Docker is available   
                    // Build Docker image and tag it with the current git commit hash
                    def image = docker.build("VinoaN/sample_node:${env.GIT_COMMIT}","backend")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker') {
                        image.push()
                    }
                }
            }
        }
    }
}