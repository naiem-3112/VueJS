//Declarative rendering
var test = new Vue({
	el: '#test',
	data: {
		msg: 'hello vue '+ new Date().toLocaleString()
	}
})

// test 2
var test2 = new Vue({
	el: '#test2',
	data: {
		msg2: 'I am from second instance'
	}
})

test2.msg2= 'change second instance'

// Conditionals and Loops

var check = new Vue({
	el: '#check',
	data: {
		check: true
	}
})

//Handle user input
var mango = new Vue({
	el:'#mango',
	data:{
		message: 'my message'
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}

})

