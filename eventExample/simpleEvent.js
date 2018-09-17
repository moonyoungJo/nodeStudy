const onUncaughtException = (error) => {
    console.log('예외가 발생했군. 이번에만 봐준다');
    process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

const test = () => {
    setTimeout(test, 2000);
    error.error.error();    //없는 error의 없는 error 프라퍼티에 없는 error 함수
};
setTimeout(test, 2000);