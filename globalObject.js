console.log('filename:' + __filename);
console.log('dirname:' + __dirname);

//타이머
console.time('timerId');
console.timeEnd('timerId');

//실행 매개변수
process.argv.forEach((item, index) => {
    console.log(`${index} : ${typeof item} : ${item}`);

})

//현재 운영체제 및 프로그램 관련 정보 표시
console.log(`process.env : ${process.env}`);
console.log(`process.version : ${process.version}`);
console.log(`process.versions : ${process.versions}`);
console.log(`process.arch : ${process.arch}`);
console.log(`process.platform : ${process.platform}`);
console.log(`process.connected : ${process.connected}`);
console.log(`process.exeArgv : ${process.execArgv}`);
console.log(`process.exitCode : ${process.exitCode}`);
console.log(`process.mainModule : ${process.mainModule}`);
console.log(`process.release : ${process.release}`);
console.log(`process.memoryUsage() : ${process.memoryUsage()}`);
console.log(`process.uptime() : ${process.uptime()}`);
console.log(`process.uptime() : ${process.uptime()}`);
console.log(`process.uptime() : ${process.uptime()}`);

