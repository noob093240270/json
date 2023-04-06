let user1 = {
	name: "gsf",
	age: 30,
	male: true,
	num: '89998888999',
	job: "prog",
	education: ['school60', 'SFU'],
	obj: {
		rus: 96,
		math: 90,
		info: 99,
		sredMath: function () {
			let s = 0;
			let n = 0;
			for (let i in this) {
				if (typeof (this[i]) == 'number') {
					s += this[i];
					n += 1;
				}
				//console.log(`s=${s} , ${this[i]}`)
			}

			s /= n;
			//console.log(`this.length=${this.length}`)
			return s;
		}
	}
}
console.log(user1.obj.sredMath());



/*let user2 = {}
for (let k in user1)  // если ключи будут примитивные
{
	user2[k] = user1[k];
}
*/

// функция проверки примитивов, а именно boolean,number,string
function isPremitive(user1) {
	return typeof (user1) == 'number' || typeof (user1) == 'boolean' || typeof (user1) == 'string';
}
//функция проверки объекта
function isObj(obj) {
	return typeof (obj) == "object";
}
//функция проверки массива
function isArray(obj) {
	return Array.isArray(obj);
}
//функция проверки функции
function isFunction(obj) {
	return typeof (obj) == "function";
}




function makeClone(obj) {
	if (obj) {
		if (isPremitive(obj)) {
			return obj;
		}
		else if (isArray(obj)) {
			return obj.map((val) => {
				return makeClone(val)
			})
		}
		else if (isFunction(obj)) {
			return obj;
		}
		else if (isObj(obj)) {
			let res = {};
			for (let k in obj) {
				res[k] = makeClone(obj[k]);
			}
			return res;
		}
	}
}

//console.log(makeClone(user1));


let str = JSON.stringify(user1);
console.log(str);

let obj = JSON.parse(str);
console.log(obj);