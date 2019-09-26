pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					cd prueba-login/
					sudo docker-compose build
				'''
			}
		}
		stage('Deploy') {
			steps {
				sh '''
					cd prueba-login/
					sudo docker-compose up
				'''
			}
		}
	}
}
