pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
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
