pipeline {
	agent {
		docker {
			image 'dduportal/docker-compose:latest'
		}
	}
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
