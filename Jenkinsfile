pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh '''
					pwd
					cd /home/ubuntu/pruebas-node/prueba-login/
					docker-compose build
				'''
			}
		}
		stage('Deploy') {
			steps {
				sh '''
					cd /home/ubuntu/pruebas-node/prueba-login/
					sudo docker-compose up
				'''
			}
		}
	}
}
