// import yargs from 'yargs';

// const args = yargs
// 			.option('production', {
// 				boolean: true,
// 				default: false,
// 				describe: 'min all files'
// 			})// 是否生产环境
// 			.option('watch', {
// 				boolean: true,
// 				default: true,
// 				describe: 'watch all files'
// 			})// 是否检测文件变化
// 			.option('verbose', {
// 				boolean: true,
// 				default: false,
// 				describe: 'log'
// 			}) // 日志
// 			.option('sourcemaps', {
// 				describe: 'force the creation of sourcemasp'
// 			})
// 			.option('port', {
// 				string: true,
// 				default: 4000,
// 				describe: 'desc'
// 			})
// 			.argv;

import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })

  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv

export default args;
