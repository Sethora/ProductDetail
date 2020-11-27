module.exports = {
  apps: [
    {
      name: 'aws-codedeploy',
      script: 'npx',
      args: 'server -s build -l 3001 -n',
      interpetrer: 'none',
      env: {
        NODE_EMV: 'development',
      },
    },
  ],
};