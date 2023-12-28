function loadingBar(b) {




if ( b < 100){ console.log(b+`% `+  ("[" +`%`.repeat((b/10))+`.`.repeat(10-b/10)+']'));
                console.log("Still loading...");


}else{ console.log( "100% Complete!");
        console.log(b+`% `+  ("[" +`%`.repeat((b/10))+`.`.repeat(10-b/10)+']'));


}
}
loadingBar(70)