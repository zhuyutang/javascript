var pro = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		reject(222)
	},100)
}); 

/**
 * then用法
 * 1.then可以接受第一个promise的状态，按先后顺序执行，then函数里面不可以直接使用resolve或reject
 * 2.除了第一个then，其他then接受不到res
 * 3.finally不论结果如何都会执行，但接受不到参数
 */
pro.then(res=>{
	console.log('then1-resolve',res)
},res=>{
	console.log('then1-reject',res)
})
.then(res=>{
	console.log('then2-resolve',res)
},res=>{
	console.log('then2-reject',res)
}).finally(res=>{
	console.log('finally',res)
})

// then1-reject 222
// then2-resolve undefined
// finally undefined

/**
 * then用法2
 * 1.如果then返回的promise对象，接下来的then需要根据前一个then返回的promise状态
 */
var pro1 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		resolve(11)
	})
})
pro1.then(res=>{
	console.log('then1-resolve',res)
	return new Promise((resolve,reject)=>{
		resolve(222)
	})
},res=>{
	console.log('then1-reject',res)
}).then(res=>{
	console.log('then2-resolve',res)
},res=>{
	console.log('then2-reject',res)
}).finally(res=>{
	console.log('finally',res)
})

/**
 * promise.all用法
 * 1.所有pro都resolve了才会执行then的resolve，res为所有pro的结果数组
 * 2.只要有一个pro执行了reject了，就会执行then的reject，res为reject的res（不是数组）
 */
var pro1 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		resolve(111);
	},100)
})
var pro2 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		reject(222);
	},200)
})
var pro3 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		reject(333);
	},300)
})
Promise.all([pro1,pro2,pro3]).then(res=>{
	console.log(res);
},res=>{
	console.log(res)
}).finally(res=>{
	console.log(res);
})


/**
 * promise.race用法
 * 1.最快的pro有了结果（resolve，reject），就会执行then
 */
var pro4 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		resolve(111);
	},300)
})
var pro5 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		resolve(222);
	},200)
})
var pro6 = new Promise((resolve,reject)=>{
	setTimeout(res=>{
		reject(333);
	},100)
})
Promise.race([pro4,pro5,pro6]).then(res=>{
	console.log(res);
},res=>{
	console.log(res)
}).finally(res=>{
	console.log(res);
})

/**
 * async-await
 * 1.async 修饰的函数里可以用await
 * 2.await返回后，后续代码才会执行
 * 3.如果有await执行了reject，
 *   a.如果有catch捕获，则继续执行代码，
 *   b.如果没有catch捕获，则后续await不执行，并被async函数的then捕获
 * 
 */
var pro7 = function(){
	return  new Promise((resolve,reject)=>{
		setTimeout(res=>{
			reject(111)
		},100)
	})
}
var pro8 = function(){
	return  new Promise((resolve,reject)=>{
		setTimeout(res=>{
			resolve(222)
		},200)
	})
}

async function asyncTest(){
	try{
		
		let res3 = await pro7();
	}catch(e){
		//TODO handle the exception
		let res2 = await pro8();
	}
	return 333;
}

asyncTest().then(res=>{
	console.log(res)
},res=>{
	console.log(res)
})
