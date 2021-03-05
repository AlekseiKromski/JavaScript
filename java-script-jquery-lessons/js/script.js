$(function(){
	// //Выборка элементов внутри .grid_5
	// var all = $('*', '.grid_5');
	// all.css({
	// 	'border': "1px solid red"
	// })

	// $('.grid_6.preffix_1 .el-1').css({
	// 	'border': "1px solid red"
	// })

	// $('span,h1,.grid_6.preffix_1 .el-1').css({
	// 	'border': "1px solid red"
	// })

	// $('.container > div').css({
	// 	'border': "1px solid red"
	// })

	// $('#header + section ').css({
	// 	'border': "1px solid blue"
	// })


	// $('div.grid_12 ~ div').css({
	// 	'border': "1px solid blue"
	// })

	// var obj = $('div.grid_12 ~ div').css({
	// 	'border': "1px solid blue"
	// })

	// console.log(obj[0]);

	// for(v in obj){
	// 	console.log(v);
	// }

	$('[class ^= container],[class ^= row]').css({
		'border': "1px solid blue"
	})
})