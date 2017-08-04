$(function() {
	systemSettings();

})

function systemSettings() {
	//系统设置-全选
	$("input[name='b']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name='a']").prop("checked", true);
		} else {
			$("input[name='a']").prop("checked", false);
		}
	});
	//店铺管理-全选
	$("input[name='d']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name='c']").prop("checked", true);
		} else {
			$("input[name='c']").prop("checked", false);
		}
	});
	//商品管理-全选
	$("input[name='f']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name='e']").prop("checked", true);
		} else {
			$("input[name='e']").prop("checked", false);
		}
	});
	//会员管理-全选
	$("input[name='h']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name = 'g']").prop("checked", true);
		} else {
			$("input[name='g']").prop("checked", false);
		}
	});
	//订单管理-全选
	$("input[name='j']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name = 'i']").prop("checked", true);
		} else {
			$("input[name='i']").prop("checked", false);
		}
	});
	//财务管理-全选
	$("input[name='l']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name = 'k']").prop("checked", true);
		} else {
			$("input[name='k']").prop("checked", false);
		}
	});
	//内容管理-全选
	$("input[name='n']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name = 'm']").prop("checked", true);
		} else {
			$("input[name='m']").prop("checked", false);
		}
	});
	//营销管理管理-全选
	$("input[name='p']").click(function() {
		//判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
		if($(this).is(":checked")) {
			$("input[name = 'o']").prop("checked", true);
		} else {
			$("input[name='o']").prop("checked", false);
		}
	});
}