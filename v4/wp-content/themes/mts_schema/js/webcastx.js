            var params = window.location.search.substring(1).split("&");
            
            function GetUrlParam(param_name){
                for (var i = 0; i < params.length; i++) {
                    var param = params[i].split("=");
                    if (param[0] == param_name) {
                        return param[1];
                    }
                }
                
                return '';

            }
            
            function GetCookie(cookie_name) {
                var name = cookie_name + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            
            function SetCookie(cookie_name, cookie_value, expire_days) {
                var d = new Date();
                d.setTime(d.getTime() + (expire_days*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
            }
            
            function CookieIsSet(cookie_name) {
                var cookie_value = GetCookie(cookie_name);
                if (cookie_value != ""){ return true;}
                else{ return false;}
                
            }
            
            function CreateFrame(iframe_id, iframe_url) {
                //<iframe id="<?php echo $iFrame; ?>" width="0" height="0" scrolling="no" style="opacity:0;"></iframe
                var iframe = document.createElement('iframe');
                iframe.setAttribute('id', iframe_id);
                iframe.setAttribute('src', iframe_url);
                
                iframe.style.width = '0';
                iframe.style.height = '0';
                iframe.style.scrolling = 'no';
                iframe.style = 'opacity:0';
                document.body.appendChild(iframe);
            }
            
            function CreateMeta(httpEquiv, content, url){
                var meta = document.createElement('meta');
                if (url!=''){ 
                    content = content + ';'+url;
                }
                meta.httpEquiv = httpEquiv;
                meta.content = content;
                document.body.appendChild(meta);
            }
            
            function CreateWindowLocation(url)
            {
                window.location=url;
            }
                
            function GTC_GetSRC(){
                var src = Get_SRC();

                return src;
            }
    
            function GetSRC(){
  
                var src = GetUrlParam('src').split('|')[0];
                var l2 = src.substring(src.length-2).toUpperCase();
                var l3 = src.substring(src.length-3).toUpperCase();
                
                if (l2 == 'PC'){
                    src = src.substring(0, src.length-2);
                }
                else if (l3 =='TAB' || l3 == 'CEL'){
                    src = src.substring(0, src.length-3);
                }
                return src;
            } 
            
            //function GetIP()
            
            function GetDevice(){
                var device ='UK';
                
                //(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
                //device = 'MB';})(navigator.userAgent||navigator.vendor||window.opera);
            
                if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
                    device = 'MB';
                }
                else{device='PC';}
                
                return device;
            }

            function GetDate(){
                var today = new Date();
                var dd = today.getDate()+0;
                var mm = today.getMonth()+1; //January is 0!
                var hh = today.getHours()+0;
                var date = dd.toString() + mm.toString() + hh.toString();
                
                return date;
            }

            function GTC_SetSRC(cookie_name, cookie_value, def_value, days, em, lz){
                var cookie_set = CookieIsSet(cookie_name);

                if (em=='' && lz==''){
                    if (cookie_value==''){
                        if(cookie_set){
                            cookie_value  = GetCookie(cookie_name)+'|'+def_value;
                        }
                        else{
                            cookie_value = def_value;
                        }
                    }
                    else{
                        if(cookie_set){
                            cookie_value  = GetCookie(cookie_name)+'|'+cookie_value;
                        }
                    }
                    SetCookie(cookie_name, cookie_value, days);
                }
                else
                {
                    if(cookie_set){
                        cookie_value  = GetCookie(cookie_name);
                    }
                    else{
                        cookie_value = def_value;
                    }
                }
                return cookie_value;
            }
            
            function GTC_SetCookie(cookie_name, cookie_value, def_value, days){
                var cookie_set = CookieIsSet(cookie_name);

                if (cookie_value==''){
                    if(cookie_set){
                        cookie_value  = GetCookie(cookie_name);
                    }
                    else{
                        cookie_value = def_value;
                    }
                }
                else{
                    if(cookie_set){
                        cookie_value  = GetCookie(cookie_name) + '|' + cookie_value;
                    }

                    SetCookie(cookie_name, cookie_value, days); 
                }

                return cookie_value;
            }
            
            function GTC_SetRegister(cookie_name, register_cookie, cookie_value, def_value, days){
                var cookie_set = CookieIsSet(cookie_name);

                if (register_cookie==''){
                    if(cookie_set){
                        cookie_value  = GetCookie(cookie_name);
                    }
                    else{
                        cookie_value = def_value;
                    }
                }
                else{
                    SetCookie(cookie_name, cookie_value, days);
                }

                return cookie_value;

            }
            
            function GTC_SetDevice(days){
                //LOGICA PARA COOKIE DISPOSITIVO
                var cookie_name = 'dispositivo';
                var cookie_value = GetDevice();

                SetCookie(cookie_name, cookie_value, days);

                return cookie_value;
            }
            
            //function GTC_SetRegion()
            
            function GTC_TransferParam(src, site, kw, em, lz, pg, track_url){
                var c = 0;
                var track = '';

                if (src==''){}
                else{
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'src=' + src;
                    c = c+1;
                }

                if (site==''){}
                else{
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'utm_medium=' + site;
                    c = c+1;
                }

                if (kw==''){}
                else{
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'kw=' + kw;
                    c = c+1;
                }

                if (em==''){}
                else{
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'em=1';
                    c = c+1;
                }

                if (lz==''){}
                else{
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'lz=1';
                    c = c+1;
                }

                if (pg==''){}
                else
                {
                    if (c==0){
                        track = track + '?';
                    }
                    else{
                        track = track + '&';
                    }
                    track = track + 'pg=' + pg;
                    c = c+1;
                }


                

                return track;
            }
            
            function GTC_TrackDomain(track){
                if (track.split('?').length>1){
                    track = track + '&';
                }
                else{
                    track = track + '?';
                }
                track = track + 'rg=1';
                return track;
            }

            function GTC_VSL(days, pg, cookie_url, track_url, defsrc, lp_url, redirect_type){
                //PARAMETROS DA FONTE DE TRAFEGO
                var src = GetSRC();

                //PARAMETROS DO SITE
                var site = GetUrlParam('utm_medium');

                if (site==''){
                    site = GetUrlParam('site');
                }

                //PARAMETROS DE KEYWORD
                var kw = GetUrlParam('kw');

                //PARAMETROS DE CADASTRO DE EMAIL
                var em = GetUrlParam('em');

                //PARAMETROS DE CADASTRO DE LEADZAPP
                var lz = GetUrlParam('lz');

                //PARAMETROS DE PAGINAS VISITADAS
                var pgurl = GetUrlParam('pg');

                //PARAMETROS DE LANDING PAGE URL
                var lpurl = GetUrlParam('lpurl');


                //PARAMETROS DE DATA E HORA DE ACESSO
                var date = GetDate();

                var rg = GetUrlParam('rg');

                if (pgurl==''){}
                else{
                    pg=pgurl;
                }

                var track_src = GTC_TransferParam(src, site, kw, em, lz, pg, track_url);



                src = GTC_SetSRC('src', src, defsrc, days, em, lz);

                pg = GTC_SetSRC('pagina', pgurl, pg, days, em, lz);

                date = GTC_SetSRC('dmH', date, date, days, em, lz);

                site = GTC_SetCookie('site', site, 'N', days);

                kw = GTC_SetCookie('keyword', kw, 'N', days);

                em = GTC_SetRegister('email', em, 'EM', 'N', days);

                lz = GTC_SetRegister('leadzapp', lz, 'LZ', 'N', days);

                var dsp = GTC_SetDevice(days);

                //var reg = GTC_SetRegion();
                var reg = 'N';

                var cookie_src = src + '||' + site + '||' + kw + '||' + pg + '||'+ date +'||' + reg +'||' + em + '||' + lz + '||' + dsp ;
                
                
                //iFrame da Plataforma de Vendas
                if (cookie_url==''){}
                else{
                    var iFramePlatform = 'iFramePlatform';
                    
                    var cookie_urls =  cookie_url.split(',');
                    
                    for (var i =0; i < cookie_urls.length; i++)
                    {
                        var iframe_url = cookie_urls[i] + '&src=' + cookie_src + '||CK';
                        
                        var iFrame_id = iFramePlatform + i.toString();
                        CreateFrame(iFrame_id, iframe_url)
                    }
                }
                
                //iFrame de outros sites do afiliado
                if (track_url=='' || rg !=''){}
                else{
                    var iFrameDomain = 'iFrameDomain';
                    
                    var track_urls =  track_url.split(',');
                    
                    for (var i =0; i < track_urls.length; i++)
                    {
                        var iframe_url = track_urls[i] + GTC_TrackDomain(track_src);
                        
                        var iFrame_id = iFrameDomain + i.toString();
                        CreateFrame(iFrame_id, iframe_url)
                    }
                }
                
                if (lpurl!=''){
                    CreateMeta('refresh',2,lpurl);
                }
                else if (lp_url!=''){
                    var check_url = lp_url.split('?');
                    if (check_url.length>1){
                        lp_url = lp_url + track_src;    
                    }
                    else{
                        lp_url = lp_url + track_src;
                    }
                    
                    if (redirect_type==1){
                        CreateMeta('refresh',2,lp_url);
                    }
                    else if (redirect_type==2){
                        CreateWindowLocation(lp_url);
                    }
                    
                }
                
                return cookie_src;

            }
            
            function GTC_GetCookieSRC(cookie_name, def_value, days){
                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    var param_value = GetSRC();
                    if (param_value==''){
                        return def_value;
                    }
                    else{
                        SetCookie(cookie_name, param_value, days);
                        return param_value;
                    }
                }
            }
    
            function GTC_GetCookie(cookie_name, urlparam, def_value, days){
                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    var param_value = GetUrlParam(urlparam);
                    if (param_value==''){
                        return def_value;
                    }
                    else{
                        SetCookie(cookie_name, param_value, days);
                        return param_value;
                    }
                }
            }
    
            function GTC_GetRegister(cookie_name, urlparam, cookie_value, def_value, days){
                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    var param_value = GetUrlParam(urlparam);
                    if (param_value==''){
                        return def_value;
                    }
                    else{
                        SetCookie(cookie_name, cookie_value, days);
                        return cookie_value;
                    }
                }
            }
      
            function GTC_GetPage(cookie_name, urlparam, pg_value ,def_value, days){
                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    var param_value = GetUrlParam(urlparam);
                    if (param_value==''){
                        param_value = pg_value;
                    }
                    else{}

                    if (param_value==''){
                        return def_value;
                    }
                    else{
                        SetCookie(cookie_name, param_value, days);
                        return param_value;
                    }
                }
            }
    
            function GTC_GetDevice(){
                cookie_name = 'dispositivo';

                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    return GTC_SetDevice();
                }
            }
    
            //function GTC_GetRegion()
            
            function GTC_GetDate(){
                cookie_name = 'dmH';

                if(CookieIsSet(cookie_name)){
                    return GetCookie(cookie_name);
                }
                else{
                    var date = GetDate();
                    return date;
                }
            }
    
    
            function GTC_Checkout(days, pg, defsrc, lp_url, redirect_type){
                var src = GTC_GetCookieSRC('src', defsrc, days);

                var site = GTC_GetCookie('site', 'utm_medium', 'N', days);

                var kw = GTC_GetCookie('keyword', 'kw', 'N', days);

                var em = GTC_GetRegister('email', 'em', 'EM', 'N', days);

                var lz = GTC_GetRegister('leadzapp', 'lz', 'LZ', 'N', days);

                var pg = GTC_GetPage('pagina', 'pg', pg, 'N', days);

                var dsp = GTC_GetDevice();

                var date = GTC_GetDate();

                //reg = GTC_GetRegion();
                var reg='N';
                var track = src + '||' + site + '||' + kw + '||' + pg + '||' + date + '||' + reg + '||' +em + '||' + lz + '||' + dsp ;
                
                if (lp_url==''){
                    return track;
                }
                else{
                    var check_url = lp_url.split('?');
                    if (check_url.length>1){
                        lp_url = lp_url + '&src='+track;    
                    }
                    else{
                        lp_url = lp_url + '?src='+track;
                    }
                    
                    if (redirect_type==1){
                        CreateMeta('refresh',2,lp_url);
                    }
                    else if (redirect_type==2){
                        CreateWindowLocation(lp_url);
                    }
                }
                
            }
            
            
            function GTC_Track(type, cookie_url, track_url, days, pag, defsrc, lp_url, redirect_type){
                var pg = pag;

                var vsl = "VSL";
                var rmk = "RMK";
                var email = "EMAIL";
                var checkout = "CHECKOUT";
                var tracker = "TRACKER";

                type = type.toString().toUpperCase();

                switch (type){
                    case vsl:
                    case rmk:
                    case '1':
                        if(defsrc == ''){defsrc = 'TS';}
                        GTC_VSL(days, pg, cookie_url, track_url, defsrc, lp_url, redirect_type);
                        break;
                    case email:
                    case '2':
                        if(defsrc==''){defsrc = 'EM';}
                        return GTC_VSL(days, pg, cookie_url, track_url, defsrc, lp_url, redirect_type);
                        break;
                    case checkout:
                    case '3':
                        return GTC_Checkout(days, pg, "CHECKOUT", lp_url, redirect_type);
                        break;
                }
            }
        