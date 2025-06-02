pipeline {
    agent { label 'Jenkins-Agent' }
    // environment {
        // DOCKER_CREDENTIALS = 'docker'
    // }

    stages {
        stage('Checkout from Gith') {
            steps {
            git branch: 'main', changelog: false, credentialsId: 'github', poll: false, url: 'https://github.com/VinoaN/FullStack-Blogging-App.git'

            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image and tag it with the current git commit hash
                    def image = docker.build("VinoaN/sample_node:${env.GIT_COMMIT}")
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