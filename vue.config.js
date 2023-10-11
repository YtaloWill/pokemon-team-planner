export default defineConfig({
  base: "/pokemon-team-planner/",
	chainWebpack: config => {
    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
            options.limit = -1
            return options
        })
  }
});