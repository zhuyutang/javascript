/**正则表达式语法
 * https://segmentfault.com/a/1190000014981826
 * 
 * ##标志 
 * --i（不区分大小写）
 * --g（全局）
 * --m（多行）
 * 
 * ##元字符 
 * --* （匹配前面子表达式0或多次）
 * --+ （匹配前面子表达式1或多次）
 * --? （匹配前面子表达式0或1次）
 * --^ （开始位置）
 * --$ （结尾位置）
 * --| （或）
 * --\ （转义）
 * --[]（中括号表达式）
 * --() （子表达式）
 * --{} （限定字符）
 * --. （匹配除换行符\n之外的任何）
 * --\d  ([0-9])
 * --\D  ([^0-9])
 * --\s  (空白符)
 * --\S  (非空白符)
 * --\w  ([a-zA-Z_0-9])
 * --\W  ([a-zA-Z_0-9])
 * --\b  (边界)
 * --\B  (非边界)
 */

/**
 * 贪婪模式 ：默认模式，尽可能多的匹配
 * 非贪婪模式：{}? 尽可能少的匹配
 */
{
	'12345678'.replace(/\d{3,4}/g,"x");//xx
	'12345678'.replace(/\d{3,4}?/g,"x");//xx78
}

/**
 * 分组，以()括起来的，为一组
 */
{
	'a1b2d3c4'.replace(/([a-z]\d){3}/g, '*');  //*c4
}

/**
 * 反向引用
 * 可以把分组变为变量
 */
{
	//替换时间格式的分隔符
	'2019-10-28'.replace(/(\d{4})-(\d{2})-(\d{2})/,'$1/$2/$3');//2019/10/28
}

/**
 * 忽略分组
 * 可以不捕获分组，需在分组中加 ?:
 */
{
	//替换时间格式的分隔符
	'2019-10-28'.replace(/(?:\d{4})-(\d{2})-(\d{2})/,'$1/$2/$3');// 10/28/$3
}

/**
 * 前瞻
 * a(?=b)后面跟着b的a
 * a(?!b)后面不跟着b的a
 * 索引不会包含前瞻
 */
{
	//后面跟着一个数字的字符
	'a1b2cccc3'.replace(/\w(?=\d)/g,'*');//*1*2ccc*3
	//后面没跟着一个数字的字符
	'a1b2cccc3'.replace(/\w(?=\d)/g,'*');//a*b****c*
}

/**
 * RegExp对象
 * RegExp.prototype.test(); 返回false或true
 * RegExp.prototype.exec(); 搜索符合正则表达式的字符
 * RegExp.lastIndex 当前表达式匹配内容的下一个位置,从0开始
 */
{

	//reg.test()
	let reg1 = /\w/g;
	console.log(`result:${reg1.test('abc')} index:${reg1.lastIndex}`); //true 1
	console.log(`result:${reg1.test('abc')} index:${reg1.lastIndex}`); //true 2
	console.log(`result:${reg1.test('abc')} index:${reg1.lastIndex}`); //true 3
	console.log(`result:${reg1.test('abc')} index:${reg1.lastIndex}`); //false 0
	
	
	//reg.exec()
	let reg2 = /\w\d/g;
	console.log(`result:${reg2.exec('a1b2c3')}`);// 1
	console.log(`result:${reg2.exec('a1b2c3')}`); // 2
	console.log(`result:${reg2.exec('a1b2c3')}`); // 3
	console.log(`result:${reg2.exec('a1b2c3')}`); // null
}

/**
 * 字符串对象的方法
 * String.prototye.search() 
 * --返回第一个匹配的下标，如果没有返回-1
 * --是否带全局g没有影响，每次都从字符串首个字母开始
 * 
 * String.prototye.match() 
 * --如果带g标志，执行一次匹配，如果没有，则返回null，与regexp.exec()相同
 * --如果带g标志，则返回所有结果的数组
 * 
 * String.prototye.split()
 * --使用指定分隔符将string分割成数组
 * 
 * String.prototye.replace()
 * --用特定值替换匹配上的字符串
 */
{
	
}