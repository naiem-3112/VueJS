var test = new Vue({
	el: '#test',
	data: {
		msg: 'hello vue '+ new Date().toLocaleString()
	}
})

var test2 = new Vue({
	el: '#test2',
	data: {
		msg2: 'I am from second instance'
	}
})

test2.msg2= 'change second instance'

