function moveLeft(liSelector, ulSelector, time){

	let width = $(liSelector).first().innerWidth();

		if(!$(liSelector).first().is(':animated')) {

			$(liSelector).last().detach().prependTo(ulSelector).css('marginLeft',`-${width}px`).animate({marginLeft : 0});

		}

}

function moveRight(liSelector, ulSelector, time){

	// 애니메이션 실행 후, 요소를 떼서 붙임

		let width = $(liSelector).first().innerWidth();

		if(!$(liSelector).first().is(':animated')){

			$(liSelector).first().animate({

				marginLeft : `-${width}px`

			},1000, function(){

				$(this).detach().appendTo(ulSelector).removeAttr('style');

			});

		}

}

	$(function(){

		$('.box-body-right2').hover(function(){

			//마우스가 요소 안으로 들어오면
			//애니메이션이 진행중인 setInterval를 해제 => clearInterval

			clearInterval(rollingRight2);

		}, function(){

			//마우스가 요소를 빠져나가면
			//setInterval를 통해 애니메이션이 진행되도록 작업

			rollingRight2 = rollingLeft('.box-body-right2 .item-stock', '.box-body-right2 .list-stock', 1000, 2000);

		});

		$('.box-body-left2 .list-issue').hover(function(){

			//마우스가 요소 안으로 들어오면
			//애니메이션이 진행중인 setInterval를 해제 => clearInterval

			clearInterval(rollingLeft2);

		}, function(){

			//마우스가 요소를 빠져나가면
			//setInterval를 통해 애니메이션이 진행되도록 작업

			rollingLeft2 = rollingTop('.box-body-left2 .item-issue', '.box-body-left2 .list-issue', 1000, 2000);

		});

	})

	let rollingRight2 = rollingLeft('.box-body-right2 .item-stock', '.box-body-right2 .list-stock', 1000, 2000);

	let rollingLeft2 = rollingTop('.box-body-left2 .item-issue', '.box-body-left2 .list-issue', 1000, 2000)

	function rolling(){

		return setInterval(function(){

			if(!$('.item-stock').first().is(':animated')){

				let width = $('.item-stock').innerWidth();

				$('.item-stock').first().animate({

					marginLeft : `-${width}px`

				},1200, function(){
					
					$(this).detach().appendTo('.list-stock').removeAttr('style');

				});

			}
			
		},2000);

	}

	$(function(){$('.box-body-right2 .btn-next').click(function(e){

		e.preventDefault();

		moveRight('.box-body-right2 .item-stock', '.box-body-right2 .list-stock', 1000);

	});

	// 이전 버튼 클릭 이벤트를 등록

	$('.box-body-right2 .btn-prev').click(function(e){

		e.preventDefault();

		moveLeft('.box-body-right2 .item-stock', '.box-body-right2 .list-stock', 1000);

	})

});

function rollingLeft(liSelector, ulSelector, animationTime, duration){

	return setInterval(moveLeft, duration, liSelector, ulSelector, animationTime);

}

function moveTop(liSelector, ulSelector, animationTime){

	let height = $(liSelector).first().innerHeight();

	if(!$(liSelector).first().is(':animated')){

		$(liSelector).first().animate({

			marginTop : `-${height}px`

		}, animationTime, function(){

			$(this).detach().appendTo(ulSelector).removeAttr('style');

		})

	}

}

function rollingTop(liSelector, ulSelector, animamtionTime, duration){

	return setInterval(moveTop, duration, liSelector, ulSelector, animamtionTime);

}

$(function(){

	$('.box-shop-in .btn-prev').click(function(e){

		e.preventDefault();

		let boxShopIn = $(this).parents('.box-shop-in');

		let curPage = boxShopIn.find('.current-page').first().text();

		let maxPage = boxShopIn.find('.max-page').first().text();

		curPage = +curPage;

		curPage = --curPage == 0 ? maxPage : curPage;

		boxShopIn.find('.current-page').text(curPage);

	});

	$('.box-shop-in .btn-next').click(function(e){

		e.preventDefault();

		let boxShopIn = $(this).parents('.box-shop-in');

		let curPage = boxShopIn.find('.current-page').first().text();

		let maxPage = boxShopIn.find('.max-page').first().text();

		curPage = +curPage;

		curPage = ++curPage > maxPage ? 1 : curPage;

		boxShopIn.find('.current-page').text(curPage);

	});
	
});

$(function(){

	selectNewsList($('.box-body-left2 .list-press').eq(3));

	$('.box-body-left2 .btn-prev').click(function(e){

		e.preventDefault();

		let obj = $('.box-body-left2 .list-press.selected');

		if(obj.prev().length != 0) {

			selectNewsList(obj.prev());

		}

	})

	$('.box-body-left2 .btn-next').click(function(e){

		e.preventDefault();

		let obj = $('.box-body-left2 .list-press.selected');

		if(obj.next().length != 0 || !obj.next().hasClass('list-press')) {

			return;

		}

		selectNewsList(obj.next());

	})

})


function selectNewsList(el){

	$('.box-body-left2 .list-press').removeClass('selected').hide();

	el.show();

	el.addClass('selected')

	if(el.prev().length == 0){

		$('.box-body-left2 .btn-prev').hide();

	} else{

		$('.box-body-left2 .btn-prev').show();

	}

	if(el.next().length == 0 || !el.next().hasClass('list-press')){

		$('.box-body-left2 .btn-next').hide();

	} else{

		$('.box-body-left2 .btn-next').show();

	}

}

$(function(){

	$('.box-body-left3 .box-menu .btn-menu').click(function(e){

		e.preventDefault();

		$('.box-body-left3 .box-menu .item-menu .btn-menu').attr('aria-selected', false);

		$(this).attr('aria-selected', true);

		if($(this).parent().prev().length == 0){

			$('.box-body-left3 .btn-prev').hide();

		} else{

			$('.box-body-left3 .btn-prev').show();

		}

		if($(this).parent().next().length == 0){

			$('.box-body-left3 .btn-next').hide();

		} else{

			$('.box-body-left3 .btn-next').show();

		}

	})

});

$(function(){

	$('.box-body-left3 .btn-next').click(function(e){

		e.preventDefault();

		let obj = $('.box-body-left3 .box-menu .item-menu .btn-menu').filter('[aria-selected=true]')

		if(obj.parent().next().length != 0){

			obj.parent().next().children().click();

		}

		if(obj.hasClass('living')){

			obj.parents('.list-menu').animate({

				marginLeft : '-185px'

			}, 500);

		}

	})

	$('.box-body-left3 .btn-prev').click(function(e){

		e.preventDefault();

		let obj = $('.box-body-left3 .box-menu .item-menu .btn-menu').filter('[aria-selected=true]')

		if(obj.parent().prev().length != 0){

			obj.parent().prev().children().click();

		}

		if(obj.hasClass('car')){

			obj.parents('.list-menu').animate({

				marginLeft : '0px'

			}, 500);

		}

	})

});

$(function(){

	$('.group-menu .btn-more').click(function(e){

		e.preventDefault();

		$(this).toggleClass('fold');

		$('.container-menu .container-service').toggle();

		$('.group-menu .box-btn-area').toggle();

		setMenuServiceBtn(true);

	})

	$('.group-menu .box-btn-area .btn-set').click(function(e){

		e.preventDefault();

		setMenuServiceBtn();

	})

})

function setMenuServiceBtn(flag){

	$('.group-menu .box-btn-area .btn').removeClass('display-none');

	$('.container-service .group-service').removeClass('display-none');

	$('.container-menu .list-favority-menu').removeClass('display-none');

	$('.container-menu .list-select-menu').removeClass('display-none');

	$('.container-menu .list-empty-box').removeClass('display-none');

	if(flag){

		$('.group-menu .box-btn-area .btn-reset').addClass('display-none');

		$('.group-menu .box-btn-area .btn-save').addClass('display-none');

		$('.container-service .group-service').last().addClass('display-none');

		$('.container-menu .list-empty-box').addClass('display-none');

	}else{

		$('.group-menu .box-btn-area .btn-set').addClass('display-none');

		$('.group-menu .box-btn-area .btn-favorite-all').addClass('display-none');

		$('.container-service .group-service').first().addClass('display-none');

		$('.container-menu .list-favority-menu').addClass('display-none');

		$('.container-menu .list-select-menu').addClass('display-none');

		tempMenuArr = selectedMenuArr.slice(0);

		drawEmptyboxMenu(tempMenuArr);

	}

}

let tempMenuArr = []; // 선택한 메뉴를 저장할 임시 배열(저장 전)

let selectedMenuArr = []; // 선택한 메뉴를 저장할 배열(저장 완료)

$(function(){

	$('.group-service-check [type=checkbox]').click(function(){

		console.log('122');

		// 클릭한 요소의 value를 가져옴

		let val = $(this).val();

		// 전역 배열에 구독이 있는지 확인 (또는 클릭한 요소의 checked 여부를 확인)

		let index = tempMenuArr.indexOf(val);

		// 배열에 value가 있으면 (또는 클릭한 요소가 checked가 해제되면) 배열에 value를 제거

		if(index >= 0){

			tempMenuArr.splice(index, 1); // index 번지부터 1개 삭제

		}

		// 배열에 value가 없으면 배열의 길이가 4이상이면 현재 선택한 요소를 checked를 해제하고 알림창을 띄운 후 
		
		// 종료 배열의 길이가 4미만이면 배열에 value를 추가

		else{

			if(tempMenuArr.length >= 4){

				$(this).prop('checked', false);

				alert('최대 4개까지 설정할 수 있습니다.');

				return;

			}

			tempMenuArr.push(val);

		}

		// 주어진 전역 배열을 list-empty-box 요소를 배치(함수로 따로 만듬)

		drawEmptyboxMenu(tempMenuArr);

	})

})

function drawEmptyboxMenu(tempMenuArr){

	// select : 녹색박스, select 클래스를 제거 => 녹색 박스 제거

	// 모든 박스에 있는 글자들을 ''(빈 문자열)로 초기화

	$('.list-empty-box .item-box').removeClass('select').text('');

	for(index in tempMenuArr){

		$('.list-empty-box .item-box').eq(index).text(tempMenuArr[index]);

	}

	$('.list-empty-box .item-box').eq(tempMenuArr.length).addClass('select');

	// 체크 박스 관리

	$('.group-service-check [type=checkbox]').each(function(){

		let val = $(this).val();

		if(tempMenuArr.indexOf(val) != -1){

			$(this).prop('checked', true);

		}else{

			$(this).prop('checked', false);

		}

	})

}

$(function(){

	$('.group-menu .btn-save').click(function(){

		if(tempMenuArr.length == 0){

			alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.');

		}

		selectedMenuArr = tempMenuArr.splice(0);

		init();

		$('.group-menu .btn-more').click();

	});

	$('.group-menu .btn-reset').click(function(){

		alert('초기설정으로 돌아갑니다.');

		tempMenuArr = selectedMenuArr = [];

		init();

		$('.group-menu .btn-more').click();

	})

});

// 선택된 메뉴에 따른 메뉴 박스 관리 및 체크 박스 관리하는 함수

function init(){

	// 선택된 메뉴에 따른 메뉴 박스 관리

	// 선택된 메뉴가 없는 경우 => 고정된 메뉴가 출력

	if(selectedMenuArr.length == 0){

		$('.list-favority-menu').show();

		$('.list-select-menu').hide();

	}

	// 선택된 메뉴가 있는 경우 => 선택된 메뉴가 출력

	else{

		$('.list-favority-menu').hide();

		$('.list-select-menu').show();

		/*$('.list-select-menu .item-box').text('');

		for(index in selectedMenuArr){

			$('.list-select-menu .item-box').eq(index).text(selectedMenuArr[index]);

		}*/

		$('.list-select-menu').html('');

		for(index in selectedMenuArr){

			let str = `<li class="item-box">${selectedMenuArr[index]}</li>`;

			$('.list-select-menu').append(str);

		}

	}

};