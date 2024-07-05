import { exec } from 'child_process'
import path from 'path'
import scp2 from 'scp2'
import { Client } from 'ssh2'

const config = {
	host: '81.181.198.186',
	port: 22,
	username: 'root',
	password: 'murtazo#1280',
}

const localProjectPath = '/home/murtazo/Desktop/projects/natlib-v2'
const remotePath = '/var/www/html'

const buildProject = callback => {
	console.log('Building project...')
	exec('npm run build', { cwd: localProjectPath }, (err, stdout, stderr) => {
		if (err) {
			console.error('Build failed', err)
			console.log(stderr)
			return
		}
		console.log('Build complete')
		console.log('stdout:', stdout)
		console.error('stderr:', stderr)
		callback()
	})
}

const transferAndDeploy = () => {
	const conn = new Client()

	conn
		.on('ready', () => {
			console.log('Client :: ready')

			// Step 5: Transfer project files
			scp2.scp(
				path.resolve(localProjectPath + '/dist', '.'),
				{
					host: config.host,
					username: config.username,
					password: config.password,
					path: remotePath,
				},
				err => {
					if (err) {
						console.error('File transfer failed', err)
						return conn.end()
					}
					console.log('File transfer complete')

					// Step 6: SSH into your VPS and navigate to the project directory
					conn.exec(
						`cd ${remotePath} && docker-compose up -d`,
						(err, stream) => {
							if (err) throw err
							stream
								.on('close', (code, signal) => {
									console.log(
										'Stream :: close :: code: ' + code + ', signal: ' + signal
									)
									conn.end()
								})
								.on('data', data => {
									console.log('STDOUT: ' + data)
								})
								.stderr.on('data', data => {
									console.error('STDERR: ' + data)
								})
						}
					)
				}
			)
		})
		.connect(config)

	conn.on('error', err => {
		console.error('Connection error', err)
	})
}

// First, build the project, then transfer files and deploy
buildProject(transferAndDeploy)
