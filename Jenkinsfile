pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					cd prueba-login/
					docker-compose -v
					sudo docker-compose build
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
