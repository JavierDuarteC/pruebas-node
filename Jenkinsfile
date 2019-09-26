pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					cd ..
					docker-compose build
				'''
			}
		}
		stage('Deploy') {
			steps {
				sh '''
					cd ..
					docker-compose up
				'''
			}
		}
	}
}
