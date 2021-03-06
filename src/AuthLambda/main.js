const AWS = require('aws-sdk'); //  eslint-disable-line
const Logger = require('loglevel');
const AwsServerlessExpress = require('aws-serverless-express');
const MainApp = require('./app');
const Cognito = require('../lib/Cognito');
const ErrorHandler = require('../util/ErrorHandler');

const awsCognito = new AWS.CognitoIdentityServiceProvider();
const SSCognito = new Cognito(Logger, awsCognito);
const S3 = new AWS.S3();

const createEnvironment = () => ({
  COMPANY_BUCKET: process.env.COMPANY_BUCKET,
});
const createDependencies = () => ({
  Logger,
  AWS,
  SSCognito,
  ErrorHandler: ErrorHandler(Logger),
  S3,
});
const createApp = () => MainApp(createDependencies(), createEnvironment());

exports.handler = (event, context) => {
  const server = AwsServerlessExpress.createServer(createApp());
  AwsServerlessExpress.proxy(server, event, context);
};
