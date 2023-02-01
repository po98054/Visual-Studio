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

		$('.container').hover(function(){

			//마우스가 요소 안으로 들어오면
			//애니메이션이 진행중인 setInterval를 해제 => clearInterval

			clearInterval(id);

		}, function(){

			//마우스가 요소를 빠져나가면
			//setInterval를 통해 애니메이션이 진행되도록 작업

			id = rolling();

		});

	})

	let rollingRight2 = rollingLeft('.box-body-right2 .item-stock', '.box-body-right2 .list-stock', 1000, 2000);

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



}

function rollingTop(liSelector, ulSelector, animamtionTime, duration){

	return setInterval(moveTop, duration, liSelector, ulSelector, animamtionTime);

}