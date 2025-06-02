pipeline {
    agent { label 'Jenkins-Agent' }
    // environment {
        // DOCKER_CREDENTIALS = 'docker'
    // }
environment {
    IMAGE_NAME = "vinao/sample_node"
    IMAGE_TAG = "${env.GIT_COMMIT}"
}

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
                    image = docker.build("{IMAGE_NAME}:${IMAGE_TAG}:${env.GIT_COMMIT}","backend")
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
        stage('Run Container') {
    steps {
        script {
            sh "docker rm -f sample_node_container || true"
            sh "docker run -d --name sample_node_container -p 3000:3000 ${IMAGE_NAME}:${IMAGE_TAG}"
        }
    }
}
}
}
