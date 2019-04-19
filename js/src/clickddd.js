
/* 鼠标特效 */
var a_idx = 0; 
jQuery(document).ready(function($) { 
    $("body").click(function(e) { 
        //var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"); 
        arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
        $('.btn_click_num').text(++arguments.callee.num);
        //console.log('第' + arguments.callee.num + '次点击。')
        var a = "-" + arguments.callee.num + "s";
        //var $i = $("<span/>").text(a[a_idx]); 
        var $i = $("<span/>").text(a); 
        a_idx = (a_idx + 1) % a.length; 
        var x = e.pageX, 
        y = e.pageY; 
        $i.css({ 
            "z-index": 999999999999999999999999999999999999, 
            "top": y - 20, 
            "left": x, 
            "position": "absolute", 
            "font-weight": "bold", 
            "font-size": "15px",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(
                255 * Math.random()) + "," + ~~(255 * Math.random()) +
            ")" 
        }); 
        $("body").append($i); 
        $i.animate({ 
            "top": y - 180, 
            "opacity": 0 
        }, 
        1500, 
        function() { 
            $i.remove(); 
        }); 
    }); 
}); 