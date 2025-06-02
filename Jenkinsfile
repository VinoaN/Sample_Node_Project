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
    
                    // Build Docker image and tag it with the current git commit hash
                    image = docker.build("vinoan/sample_node:${env.GIT_COMMIT}","backend")
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
