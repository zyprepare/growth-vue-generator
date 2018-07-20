'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the yeoman ${chalk.red('generator-lightvue')} generator!`)
    );

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }, {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'description',
      message: 'description'
    }, {
      type: 'input',
      name: 'author',
      message: 'author',
      default: this.user.git.name()
    }, {
      type: 'input',
      name: 'email',
      message: 'email',
      default: this.user.git.email()
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let files = [
      'webpack.dev.config.js',
      'webpack.pro.config.js',
      '.editorconfig',
      '.eslintrc.js',
      'README.md',
      'src',
      'mock'
    ];

    files.forEach((file) => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    })

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        email: this.props.email
      }
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    this.log(yosay(
      'Your project templates has been created successfully!'
    ));
  }
};
