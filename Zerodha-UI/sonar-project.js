// sonar-project.js
import pkg from 'sonarqube-scanner';
const sonarqubeScanner = pkg.default;

sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000', // or your SonarQube server
    token: 'sqp_ba665b9ff7654935153a8f5a95a2c9bc57cbaa3c',          // optional if using public instance or env var
    options: {
      'sonar.projectKey': 'AI-VS-Code-Optimizer',
      'sonar.projectName': 'AI VS Code Optimizer',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'src',
      'sonar.exclusions': '**/node_modules/**,**/*.test.js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info', // if using Jest
    },
  },
  () => process.exit()
);
