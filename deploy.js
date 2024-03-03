require('dotenv').config();
const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

// Accessing environment variables
const ftpUser = process.env.FTP_USER;
const ftpPassword = process.env.FTP_PASSWORD;
const ftpHost = process.env.FTP_HOST;
const ftpPort = process.env.FTP_PORT;

// Using the environment variables
const config = {
  user: ftpUser,
  password: ftpPassword,
  host: ftpHost,
  port: ftpPort,
  localRoot: __dirname + '/dist',// or the directory containing your build artifacts
  remoteRoot: '/public_html',// the directory on the FTP server to upload to
  include: ['*', '**/*'], // Include all files and directories recursively from the localRoot directory
};

ftpDeploy.deploy(config)
  .then(() => console.log('Deployment finished successfully!'))
  .catch(err => console.error('Deployment failed:', err));