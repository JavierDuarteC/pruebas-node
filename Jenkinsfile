pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					ls
					cd prueba-login/
					ls
					docker -v
					docker-compose -v
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
