let count = 0;
let flag = true;
function loop(flag){
	setTimeout(() => {
        count++;
        flag = count === 10 ? false : true;
		new Promise((resolve, reject) => {
            console.log(new Date().toTimeString());
            flag ? resolve() : reject();
        })
        .then(() => loop(flag))
        .catch(error => {})
    },1000)
}