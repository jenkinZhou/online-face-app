module.exports = {
    module: {
      rules: [
        {
          test   : /\.less$/,
          loader: 'less-loader',
          options: {
            modifyVars: { // 修改主题变量
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            },
            javascriptEnabled: true
          }
        }
      ]
    }
  };