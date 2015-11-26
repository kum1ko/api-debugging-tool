;
(function() {
    // body...
    $(function() {
        // body...
        var apiListUrl = '../ApiDebugging/json/get.json';
        var leftList = [];
        var leftListTitle = [];
        var listMap = new Object();
        $.getJSON(apiListUrl, function(data) {

            // success回调 注意JSON格式不要错了否则……
            $('.viewc').show();
            $('.loading-log').remove();
            listMap = data;
            // console.log(listMap[0])

            $.each(data, function(i, field) {
                var index = i;
                var PStatus = true;
                // for (i = 0; i < leftListTitle.length; i++) {
                //     if (leftListTitle[i] == field['modules']) {
                //         PStatus = false;

                //         for (i = 0; i < leftList.length; i++) {

                //             if (leftList[i]['title'] == field['modules']) {
                //                 leftList[i]['content'] += '<li md="' + index + '">' + field['title'] + '</li>';
                //                 break;
                //             }
                //         }
                //         break;

                //     }
                // }


                if (PStatus) {
                    // 新增一个大分类
                    leftList.push({
                        'title': field['title'],
                        'content': '<form class="lb-form lb-form-horizontal">' +
                            '<div class="lb-form-group">' +
                            '<label for="doc-ipt-3" class="lb-u-sm-2 lb-form-label">电子邮件</label>' +
                            '<div class="lb-u-sm-10">' +
                            '<input type="email" id="doc-ipt-3" placeholder="输入你的电子邮件">' +
                            '</form>'
                    })
                    leftListTitle.push(field['modules']);
                    // _(leftList)
                }
            });

            // 构建列表，模板
            var $tpl = $('#my-tpl'),
                tpl = $tpl.text(),
                template = Handlebars.compile(tpl),
                data = {
                    accordionData: {
                        "theme": "gapped",
                        "content": leftList
                    }
                },
                html = template(data);

            $tpl.before(html);

            // _(leftList)
            $.each(['accordion'], function(i, m) {
                var module = $.AMUI[m];
                module && module.init && module.init();
            });

        });
    })
})()