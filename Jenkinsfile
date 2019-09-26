pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					ls
					cd prueba-login/
					ls
					docker-compose build
				'''
			}
		}
		stage('Deploy') {
			steps {
				sh 'docker-compose up'
			}
		}
	}
}
